import React, { Component } from 'react'
import axios from 'axios'
import Note from './Note'
import NoteForm from './NoteForm'
import update from 'immutability-helper'
import Notification from './Notification'

class NotesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Notes: [],
      editingNoteId: null,
      notification: '',
      transitionIn: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/Notes.json')
    .then(response => {
      this.setState({Notes: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewNote = () => {
    axios.post('http://localhost:3001/api/v1/Notes', {note: {title: '', body: ''}})
    .then(response => {
      const Notes = update(this.state.Notes, { $splice: [[0, 0, response.data]]})
      this.setState({Notes: Notes, editingNoteId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updateNote = (note) => {
    const noteIndex = this.state.Notes.findIndex(x => x.id === note.id)
    const Notes = update(this.state.Notes, {[noteIndex]: { $set: note }})
    this.setState({Notes: Notes, notification: 'All changes saved', transitionIn: true})
  }

  deleteNote = (id) => {
    axios.delete(`http://localhost:3001/api/v1/Notes/${id}`)
    .then(response => {
      const noteIndex = this.state.Notes.findIndex(x => x.id === id)
      const Notes = update(this.state.Notes, { $splice: [[noteIndex, 1]]})
      this.setState({Notes: Notes})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  enableEditing = (id) => {
    this.setState({editingNoteId: id}, () => { this.title.focus() })
  }

  render() {
    return (
      <div>
        <div>
          <button className="newNoteButton" onClick={this.addNewNote} >
            New Note
          </button>
          <Notification in={this.state.transitionIn} notification= {this.state.notification} />
        </div>
        {this.state.Notes.map((note) => {
          if(this.state.editingNoteId === note.id) {
            return(<NoteForm note={note} key={note.id} updateNote={this.updateNote}
                    titleRef= {input => this.title = input}
                    resetNotification={this.resetNotification} />)
          } else {
            return (<Note note={note} key={note.id} onClick={this.enableEditing}
                    onDelete={this.deleteNote} />)
          }
        })}
      </div>
    );
  }
}

export default NotesContainer

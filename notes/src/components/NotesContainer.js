import React from 'react'

import update from 'immutability-helper'
import Notification from './Notification'

class NotesContainer extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
      notes: []
		}
	}

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/notes.json')
    .then(response => {
      this.setState({notes: response.data})
    })
    .catch(error => console.log(error))
  }

  updateNote = (note) => {
    const noteIndex = this.state.notes.findIndex(x => x.id === note.id)
    const notes = update(this.state.notes, {[noteIndex]: { $set: note }})
    this.setState({notes: notes, notification: 'All changes saved', transitionIn: true})
  }

  // deleteNote = (id) => {
  //   axios
  //   .delete(`http://localhost:3001/api/v1/notes/${id}`)
  //   .then(response => {
  //     const noteIndex = this.state.notes.findIndex(x => x.id === id)
  //     const notes = update(this.state.notes, { $splice: [[noteIndex, 1]]})
  //     this.setState({notes: notes})
  //   })
  //   .catch(error => console.log(error))
  // }

  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  enableEditing = (id) => {
    this.setState({editingNoteId: id}, () => { this.title.focus() })
  }

  render() {
    console.log(this.props, this.state);
    const notesList = this.state.notes.map((note) => {
      return (
        <div className="tile">
          <span className="deleteButton" onClick={this.handleDelete}>x</span>
          <h4 onClick={this.handleClick}>{note.title}</h4>
          <p onClick={this.handleClick}>{note.body}</p>
        </div>
      )
    });

    //   if(this.state.editingNoteId === note.id) {
    //     return (<NoteForm 
    //               note={note} 
    //               key={note.id} 
    //               updateNote={this.updateNote}
    //               titleRef= {input => this.title = input}
    //               resetNotification={this.resetNotification} />)
    //   } else {
    //     return (<Notes 
    //               note={note} 
    //               key={note.id} 
    //               onClick={this.enableEditing}
    //               onDelete={this.deleteNote} />)
    //   }
    // }

    return (
      <div>
        <div>
          <button className="newNoteButton" onClick={this.addNewNote} >
            New Note
          </button>
          <Notification in={this.state.transitionIn} notification= {this.state.notification} />

          <notesList />
        </div>
        
      </div>
    );
  }
}

export default NotesContainer
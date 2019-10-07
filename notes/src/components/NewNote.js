import React, { Component } from 'react'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

// import axios from 'axios'
import update from 'immutability-helper'


class NewNote extends Component {
	constructor(props) {
		super(props)
		this.state = {
            notes: [],
            title: this.props.title,
            body: this.props.body,
            editingNoteId: null,
            notification: '',
            transitionIn: false
		}
    }
    
    addNewNote = () => {
        const data = { note: { title: this.state.title , body: this.state.body }}
        const url = `http://localhost:3001/api/v1/notes`
        
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          const notes = update(this.state.notes, { $splice: [[0, 0, response.data]]})
          this.setState({notes: notes, editingNoteId: response.data.id})
        })
        .catch(error => console.log(error))
      }
    
    handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="tile">
      	<form onBlur={this.addNewNote} >
          <input 
            className='input' 
            type="text" 
            name="title" 
            placeholder='Enter a Title'
            value={this.state.title} 
            onChange={this.handleInput}
            ref={this.props.titleRef} />
          <textarea 
            className='input' 
            name="body" 
            placeholder='Describe your note'
            value={this.state.body} 
            onChange={this.handleInput}>
          </textarea>
      	</form>
      </div>
    );
  }
}

export default NewNote
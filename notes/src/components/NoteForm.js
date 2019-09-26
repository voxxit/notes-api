import React, { Component } from 'react'
import axios from 'axios'

class NoteForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
      title: props.title,
      body: props.body,
		}
	}
  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  handleInput = (e) => {
    this.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const note = {title: this.state.title, body: this.state.body }
    axios.put(
      `http://localhost:3001/api/v1/notes/${this.state.id}`,
      {note: note}
      )
    .then(response => {
      console.log(response)
      this.props.updateNote(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
      	<form onBlur={this.handleBlur} >
					<input className='input' type="text" name="title" placeholder='Enter a Title'
            value={this.state.title} onChange={this.handleInput}
            ref={this.props.titleRef} />
					<textarea className='input' name="body" placeholder='Describe your note'
            value={this.state.body} onChange={this.handleInput}></textarea>
      	</form>
      </div>
    );
  }
}

export default NoteForm
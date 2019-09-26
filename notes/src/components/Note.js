import React, { Component } from 'react'

class Note extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: props.title,
			body: props.body
		}
	}
	handleClick = () => { this.props.onClick(this.props.note.id) }

	handleDelete = () => { this.props.onDelete(this.props.note.id) }

	render () {
		return(
		  <div className="tile">
		  	<span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.state.title}</h4>
		    <p onClick={this.handleClick}>{this.state.body}</p>
		  </div>
		)
	}
}

export default Note

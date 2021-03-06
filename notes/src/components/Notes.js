  
import React, { Component } from 'react'

class Notes extends Component {
	handleClick = () => { this.props.onClick(this.props.note.id) }

	handleDelete = () => { this.props.onDelete(this.props.note.id) }

	render () {
		return(
		  <div className="tile">
		  	<span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.props.note.title}</h4>
		    <p onClick={this.handleClick}>{this.props.note.body}</p>
		  </div>
		)
	}
}

export default Notes
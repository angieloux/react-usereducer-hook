import React, {useState} from 'react'
import {TextField, Button, Row, RightRow} from './Styled'


export default function NewProjectForm(props) {
	// passed from App
	const {addProject} = props
	
	// set up initial state
	const initialFormState = {
		name: '',
		description: ''
	}

	
	// this will return array with 2 elements, 1. the form data objects stored as state and 2. a method called setFormData that takes an object to amend form data
	// setFormData under the covers is calling setState
	const [formData, setFormData] = useState(initialFormState)

	function changeHandler(e) {
		setFormData({
			// take what is already there 
			...formData,
			// update with new value of name/description in the form
			[e.target.name]: e.target.value
		})
	}

	function submitHandler(e) {
		// prevent refresh
		e.preventDefault()

		// use what is typed into text fields to call addProject and add the new project to the list 
		addProject(formData)

		// clear out formData after submit so it doesn't show in text field
		setFormData(initialFormState)
	}
	
	return (
		<form onSubmit={submitHandler}>
			<Row>
				<label>Name:</label>	
				<TextField name="name" value={formData.name} onChange={changeHandler}></TextField>
			</Row>
			<Row>
				<label>Description:</label>
				<TextField name="description" value={formData.description} onChange={changeHandler}></TextField>
			</Row>
			<RightRow>
				<Button>Add Project</Button>
			</RightRow>
		</form>
	)
}

import React, {useState} from 'react'
import {TextField, Button, Row, RightRow} from './Styled'


export default function NewProjectForm() {
	// set up initial state
	const initialFormState = {
		name: '',
		description: ''
	}

	
	// this will return array with 2 elements, 1. the form data objects stored as state and 2. a method called setFormData that takes an object to amend form data
	const [formData, setFormData] = useState(initialFormState)

	function changeHandler(e) {
		setFormData({
			// take what is already there 
			... formData,
			// update with new value of name/description in the form
			[e.target.name]: e.target.value
		})
	}
	
	return (
		<form>
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

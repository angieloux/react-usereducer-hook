import React, {useReducer, useEffect} from 'react'
import {Heading} from './Styled'
import NewProjectForm from './NewProjectForm'
import ProjectList from './ProjectList'
import reducer from './utils/reducer'

const App = () => {
	// set up initial state object/s
	const initialState = {
		projects: []
	}

	const [store, dispatch] = useReducer(reducer, initialState)
	const {projects} = store // pull out the piece of state needed

	function addProject(project) {
		// add new project to the front and add to copied, spreaded array of projects 
		dispatch({
			type: 'addProject',
			data: project
		})
		
	}
	
	// by default, without [] this will fire every time the component renders or updates, so to be safe the useEffect should always be started with empty array at the end
	// this will override the componentDidmount lifecycle method
	useEffect(() => {
		fetch('projects.json', { // fetch returns a promise
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((projects) => {
			dispatch({
				type: 'setProjects',
				data: projects
			})
		})
		.catch((error) => console.log(error))
	}, [])

	return (
		<div >
			<Heading>Recent Projects</Heading>
			<NewProjectForm addProject={addProject} />
			<ProjectList projects={projects} />
		</div>
	)
}

export default App

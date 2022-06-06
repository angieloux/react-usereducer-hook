import React, {useState, useEffect} from 'react'
import {Heading} from './Styled'
import NewProjectForm from './NewProjectForm'
import ProjectList from './ProjectList'

const App = () => {
	// this represents initial state value for app
	const initialProjects = [] 
	function addProject(project) {
		// add new project to the front and add to copied, spreaded array of projects (that is stored as state) 
		setProjects([project, ...projects]) // setProjects is returned by useState
	}
	
	// this will return array with 2 elements, 1. list of projects stored as state and 2. a method called setProjects to amend projects
	// setProjects under the covers is calling setState
	const [projects, setProjects] = useState(initialProjects)

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
		.then((projects) => setProjects(projects))
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

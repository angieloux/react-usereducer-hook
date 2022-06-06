import React, {useState} from 'react'
import {Heading} from './Styled'
import NewProjectForm from './NewProjectForm'
import ProjectList from './ProjectList'

const App = () => {
	const initialProjects = [ // this represents initial state value for app
		{
			name: "Sets",
			description: "A React version of the popular logic game"
		},
		{
			name: "Chore Tracker",
			description: "A full stack app to track chores completed and money earned"
		},
		{
			name: "Fotozu",
			description: "A full stack app using AWS lambda for serverless backend that showcases the photography of a client"
		}
	]

	function addProject(project) {
		// add new project to the front and add to copied, spreaded array of projects (that is stored as state) 
		setProjects([project, ...projects]) // setProjects is returned by useState
	}
	
	// this will return array with 2 elements, 1. list of projects stored as state and 2. a method called setProjects to amend projects
	// setProjects under the covers is calling setState
	const [projects, setProjects] = useState(initialProjects)


	return (
		<div >
			<Heading>Recent Projects</Heading>
			<NewProjectForm addProject={addProject} />
			<ProjectList projects={projects} />
		</div>
	)
}

export default App

import React from 'react'
import {Heading} from './Styled'
import NewProjectForm from './NewProjectForm'
import ProjectList from './ProjectList'

const App = () => {
	const projects = [
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
	return (
		<div >
			<Heading>Recent Projects</Heading>
			<NewProjectForm />
			<ProjectList projects={projects} />
		</div>
	)
}

export default App

import React from 'react'
import Project from './Project'

export default function ProjectList(props) {
	const {projects} = props
	return (
		<div>
			{projects.map(({name, description}, index) => (
				<Project key={index} name={name} description={description} />
			))}
		</div>
	)
}

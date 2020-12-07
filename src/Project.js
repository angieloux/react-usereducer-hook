import React from 'react'
import {ProjectHeading, Card} from './Styled'

export default function Project(props) {
	const {name, description} = props
	return (
		<Card>
			<ProjectHeading>{name}</ProjectHeading>
			<p>{description}</p>
		</Card>
	)
}

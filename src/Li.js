import React from 'react'

export default class Li extends React.Component{
	constructor(props){
		supper(props)
	}
	render(){
		<li><h1>{this.props.title}</h1><h2>{this.props.head}</h2></li>
	}
}

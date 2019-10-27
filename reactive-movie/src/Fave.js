import React, {Component} from 'react'

export default class Fave extends Component {
	constructor(props){
		super(props)
		this.state={
			isFave: false
		}
	}
	handleClick = (e)=>{
			e.stopPropagation()
			this.setState({
				isFave: !this.state.isFave
			})
		}
	render() {
		let isFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue';

		return (
			<div onClick={(e) => this.handleClick(e)} className="film-row-fave add_to_queue">
				<p className="material-icons" > {isFave}</p>
			</div>
		)
	}
}
import React, {Component} from 'react'
import ColorPicker from '../components/ColorPicker'

class Select extends Component {

	state = {
		bgcolor: 'teal',
	}

	handleColorChange = color => {
		this.setState({bgcolor: color});
	}

	handleColorUpdate = () => {
		const body = document.querySelector('body');
		body.style.background = this.state.bgcolor;

	}

	componentDidMount = () => {
		this.handleColorUpdate();
	}

	componentDidUpdate = () => {
		this.handleColorUpdate();
	}

	render() {
		return (
			<div className="foo">
				<h1>Hello, World!</h1>
				<label>What color?
					<ColorPicker value={this.state.bgcolor} onColorChange={this.handleColorChange}/>
				</label>
			</div>
		)
	}
}

export default Select
import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ColorPicker extends Component {
	static defaultProps = {
		value: 'teal' ,
	}

	static propTypes = {
		value: PropTypes.string,
		onColorChange: PropTypes.func,
	}

	handleChange = (e) => {
		e.preventDefault();
		let color = e.target.value;
		if (this.props.onColorChange)
			this.props.onColorChange(color);
	}

	render() {
		return(
			<select value={this.props.value} onChange={this.handleChange}>
				<option value="orangered">orangered</option>
				<option value="teal">teal</option>
				<option value="orange">orange</option>
				<option value="indigo">indigo</option>
				<option value="red">red</option>
			</select>
		)
	}
}

export default ColorPicker
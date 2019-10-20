import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Hello extends Component{

	constructor(){
		super()
		this.state = {
			message: 'Hello, '
		}  
	}

	render(){
		const { message } = this.state
		const { name } = this.props
		return(<h1>{ message + name + '!' }</h1>)
	}
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

Hello.defaultProps = {
  name: 'Anderson'
};

export default Hello

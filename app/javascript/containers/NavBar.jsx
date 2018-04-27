import React, {Component} from 'react';
import { connect } from 'react-redux';
import PostTitle from '../components/PostTitle';

class NavBar extends Component {
	render() {
		return <PostTitle />
	}
}

export default connect(
	(state) => ({ post: state.post })
)(NavBar);
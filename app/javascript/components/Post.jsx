import React, {Component} from 'react'

class Post extends Component {
	tryClick = () => {
		console.log('test');
	}
	render(){
		return (
			<div className="blog-post">
				<button className="btn btn-info" onClick={this.tryClick}>Create Post</button>
			</div>
		)
	}
}

export default Post
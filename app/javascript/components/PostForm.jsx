import React, {Component} from 'react'

class PostForm extends Component {
	render() {
		return(
           <div className="callout secondary form-area">
             <h5>Add a Post to the React Blog</h5>
               <form ref="postForm" onSubmit={this.createPost}>
                <div className="form-group">
                 <label>Post Title
                   <input className="form-control" type="text" ref="title" placeholder="Post Title" required/>
                 </label>
                </div>
                <div className="form-group">
                 <label>Author Name
                   <input  className="form-control" type="text" ref="name" placeholder="Full Name required" required/>
                 </label>
                </div>
                <div className="form-group">
                 <label>Post Body
                 <textarea
                   class="form-control"
                   ref="desc"
                   placeholder="Write your post here" required/>
                 </label>
                </div>
                <div className="form-group">
                 <label>Upload image
                   <input type="file" class="form-control-file" ref="image" placeholder="The file of the featured image for your post" required/>
                 </label>
                </div>
                <button type="submit" class="button">Add Post</button>
               </form>
           </div>
		)
	}
}

export default PostForm
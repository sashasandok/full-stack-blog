// react
import React, { Component } from 'react'

import postApi from '../../api/api-post'

// styles
import './AddPost.css'

class AddPost extends Component {
  state = {
    title: '',
    content: '',
  }

  onTitleChange = evt => {
    console.log(evt.target.value)
    this.setState({
      title: evt.target.value,
    })
  }

  onContentChange = evt => {
    console.log(evt.target.value)
    this.setState({
      content: evt.target.value,
    })
  }

  newPostSubmit = evt => {
    evt.preventDefault()
    postApi.addPost(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="add-new-post-block">
        <form className="add-new-post-form" onSubmit={this.newPostSubmit}>
          <input
            type="text"
            placeholder="post title"
            onChange={this.onTitleChange}
          />
          <textarea
            rows="10"
            name="text"
            placeholder="post content"
            onChange={this.onContentChange}
          />
          <button>add new post</button>
        </form>
      </div>
    )
  }
}

export default AddPost

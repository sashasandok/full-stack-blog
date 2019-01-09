// react
import React from 'react'

// styles
import './Post.css'

const Post = props => {
  return (
    <div className="post-card">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

export default Post

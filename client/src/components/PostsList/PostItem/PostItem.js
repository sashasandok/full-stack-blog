// react
import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './PostItem.css'

const PostItem = props => {
  return (
    <div className="post-item-card">
      <Link to={`/post/${props.id}`}>
        <h1>{props.title}</h1>
      </Link>
      <p>{props.content}</p>
    </div>
  )
}

export default PostItem

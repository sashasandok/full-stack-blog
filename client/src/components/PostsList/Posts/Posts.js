// react
import React from 'react'

// components
import Post from '../Post/Post'

// utils
import _ from 'lodash'

const Posts = props => {
  return _.map(props.posts, item => {
    return (
      <Post
        key={item.id}
        id={item.id}
        title={item.title}
        content={item.content}
      />
    )
  })
}

export default Posts

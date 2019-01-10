// react
import React from 'react'

// components
import PostItem from '../PostItem/PostItem'

// utils
import _ from 'lodash'

// styles
import './Posts.css'

const Posts = props => {
  return props.posts.length === 0 ? (
    <div className="no-posts">You Have No Posts At Yet</div>
  ) : (
    _.map(props.posts, item => {
      return (
        <PostItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
        />
      )
    })
  )
}

export default Posts

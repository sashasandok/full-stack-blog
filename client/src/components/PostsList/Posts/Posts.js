// react
import React from 'react'
import PropTypes from 'prop-types'

// components
import PostItem from '../PostItem/PostItem'

// utils
// moment
import moment from 'moment'
import _ from 'lodash'

// styles
import './Posts.css'

const Posts = props => {
  const sortPosts = _.sortBy(props.posts, o => {
    return moment(o.date)
  }).reverse()

  return sortPosts.length === 0 ? (
    <div className="no-posts">You Have No Posts At Yet</div>
  ) : (
    _.map(sortPosts, item => {
      return (
        <PostItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          date={item.date}
        />
      )
    })
  )
}

Posts.propTypes = {
  posts: PropTypes.instanceOf(Array),
}

export default Posts

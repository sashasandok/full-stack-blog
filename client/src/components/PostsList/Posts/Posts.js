// react
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// prop-types
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
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={700}
      style={{ width: '100%' }}
    >
      {_.map(sortPosts, item => {
        return (
          <PostItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.date}
            getPosts={() => props.getPosts()}
          />
        )
      })}
    </ReactCSSTransitionGroup>
  )
}

Posts.propTypes = {
  posts: PropTypes.instanceOf(Array),
  getPosts: PropTypes.func.isRequired,
}

export default Posts

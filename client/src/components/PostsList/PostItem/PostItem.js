// react
import React from 'react'
import { Link } from 'react-router-dom'

// prop-types
import PropTypes from 'prop-types'

// utils
import moment from 'moment'

// styles
import './PostItem.css'

const PostItem = props => {
  return (
    <div className="post-item-card">
      <Link to={`/post/${props.id}`}>
        <h1>{props.title}</h1>
      </Link>
      <div className="post-item-divider" />
      <p className="item-content">{props.content}</p>
      <div className="date-blok">
        <p className="item-date">
          {moment(props.date).format('MMMM Do YYYY, h:mm:ss a')}
        </p>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default PostItem

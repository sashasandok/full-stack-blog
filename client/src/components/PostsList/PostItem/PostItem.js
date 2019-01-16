// react
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'

// styles
import './PostItem.css'

const PostItem = props => {
  return (
    <div className="post-item-card">
      <Link to={`/post/${props.id}`}>
        <h1>{props.title}</h1>
      </Link>
      <span>{moment(props.date).format('lll')}</span>
      <p>{props.content}</p>
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

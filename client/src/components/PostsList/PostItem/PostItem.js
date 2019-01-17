// react
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// api
import postApi from '../../../api/api-post'

// prop-types
import PropTypes from 'prop-types'

// utils
import moment from 'moment'

// styles
import './PostItem.css'

class PostItem extends Component {
  delete = id => {
    postApi.deletePost(id)
    this.props.getPosts()
  }

  render() {
    return (
      <div className="post-item-card">
        <button
          className="delete-btn"
          onClick={() => this.delete(this.props.id)}
        >
          x
        </button>
        <Link to={`/post/${this.props.id}`}>
          <h1>{this.props.title}</h1>
        </Link>
        <div className="post-item-divider" />
        <p className="item-content">{this.props.content}</p>
        <div className="date-blok">
          <p className="item-date">
            {moment(this.props.date).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
        </div>
      </div>
    )
  }
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired,
}

export default PostItem

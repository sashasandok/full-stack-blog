// react
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// actions
import { getPosts } from '../../actions/post'

// api
import postApi from '../../api/api-post'

// styles
import './Post.css'

class Post extends Component {
  componentDidMount = () => {
    this.props.getPosts()
  }

  delete = id => {
    postApi.deletePost(id)
    this.props.history.push('/')
    this.props.getPosts()
  }

  render() {
    const { post } = this.props

    return (
      <div className="post-card">
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
        <div>
          <Link to="/">
            <button className="post-return-btn">posts list</button>
          </Link>
          <button
            className="post-return-btn"
            onClick={() => this.delete(post.id)}
          >
            delete
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const postId = props.match.params.postId
  return {
    isFetching: state.post.isFetching,
    posts: state.post.items || [],
    post: state.post.items.find(i => i.id === postId) || {},
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
})

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.instanceOf(Array),
  post: PropTypes.instanceOf(Object),
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.instanceOf(Object),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post)

// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// actions
import { getPosts } from '../../actions/post'

// components
import Posts from './Posts/Posts'

// styles
import './PostsList.css'

class PostsList extends Component {
  componentDidMount = () => {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <div className="posts-list">
        <Posts posts={posts} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  posts: state.post.items || [],
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
})

PostsList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.instanceOf(Array),
  isFetching: PropTypes.bool.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList)

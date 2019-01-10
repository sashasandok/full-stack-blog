// react
import React, { Component } from 'react'

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

// Posts.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList)

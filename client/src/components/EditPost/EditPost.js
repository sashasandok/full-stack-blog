// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// actions
import { getPosts } from '../../actions/post'

// api
import postApi from '../../api/api-post'

// styles
import './EditPost.css'

class EditPost extends Component {
  state = {
    title: '',
    content: '',
  }

  componentDidMount = () => {
    this.props.getPosts()
  }

  onTitleChange = evt => {
    this.setState({
      title: evt.target.value,
    })
  }

  onContentChange = evt => {
    this.setState({
      content: evt.target.value,
    })
  }

  editPostSubmit = evt => {
    const postId = this.props.match.params.postId
    evt.preventDefault()
    postApi.updatePost({
      postId: postId,
      title: this.state.title,
      content: this.state.content,
    })
    this.props.history.push('/')
    this.props.getPosts()
  }

  render() {
    const { post } = this.props

    return (
      <div className="edit-post-block">
        <form className="edit-post-form" onSubmit={this.editPostSubmit}>
          <input
            type="text"
            onChange={this.onTitleChange}
            defaultValue={post.title}
          />
          <textarea
            rows="7"
            name="text"
            onChange={this.onContentChange}
            defaultValue={post.content}
          />
          <button>save post</button>
        </form>
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

EditPost.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.instanceOf(Array),
  post: PropTypes.instanceOf(Object),
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost)

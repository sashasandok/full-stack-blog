const Post = require('../models/post')
const moment = require('moment')

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.send(posts)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.addPost = (req, res, next) => {
  const title = req.body.title
  const content = req.body.content
  const date = new Date()

  const post = new Post({
    title,
    content,
    date,
  })

  post
    .save()
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err))
}

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId

  Post.findByIdAndRemove(postId)
    .then(() => {
      console.log('DESTROYED POST')
    })
    .catch(err => console.log(err))
}

exports.updatePost = (req, res, next) => {
  const postId = req.body.postId
  const updatedTitle = req.body.title
  const updatedContent = req.body.content

  Post.findByIdAndUpdate(postId)
    .then(post => {
      post.title = updatedTitle
      post.content = updatedContent

      return post.save()
    })
    .then(result => {
      console.log('UPDATED POST!', result)
    })
    .catch(err => console.log(err))
}

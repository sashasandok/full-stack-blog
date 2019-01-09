const Post = require('../models/post')

exports.getIndex = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.send(posts)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.send(posts)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.getPost = (req, res, next) => {
  Post.findById('5c34c0f2e7179a7d12412ffe')
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
  const post = new Post({
    title,
    content,
  })
  post
    .save()
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err))
}

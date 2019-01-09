const Post = require('../models/post')

exports.getIndex = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.send(posts)
    })
    .catch(err => {
      console.log(err)
    })
  console.log('Index route')
}

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.send(posts)
    })
    .catch(err => {
      console.log(err)
    })
  console.log('get Posts')
}

exports.getPost = (req, res, next) => {
  Post.findById('5c34c0f2e7179a7d12412ffe')
    .then(posts => {
      res.send(posts)
    })
    .catch(err => {
      console.log(err)
    })
  console.log('get Post by id')
}

const Post = require('../models/post')

exports.getIndex = (req, res, next) => {
  res.send('<h1>Index root route</h1>')
  Post.find()
    .then(posts => {
      console.log(posts)
    })
    .catch(err => {
      console.log(err)
    })
  console.log('Index route')
}

exports.getPosts = (req, res, next) => {
  res.send('<h1>Get many posts route</h1>')
  Post.find()
    .then(posts => {
      console.log(posts)
    })
    .catch(err => {
      console.log(err)
    })
  console.log('get Posts')
}

exports.getPost = (req, res, next) => {
  res.send('<h1>Get one post by id route</h1>')
  console.log('get Post by id')
}

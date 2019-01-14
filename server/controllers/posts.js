const Post = require('../models/post')

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

exports.deletePost = (req, res, next) => {
  const postId = req.body.postId
  console.log(req)
  Post.findOneAndDelete(postId)
    .then(() => {
      console.log('DESTROYED PRODUCT')
    })
    .catch(err => console.log(err))
}

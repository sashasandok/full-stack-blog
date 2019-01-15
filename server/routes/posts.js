const express = require('express')

const postController = require('../controllers/posts')

const router = express.Router()

router.get('/posts', postController.getPosts)

router.post('/add-post', postController.addPost)

router.delete('/posts/:postId', postController.deletePost)

router.put('/posts/:postId', postController.updatePost)

module.exports = router

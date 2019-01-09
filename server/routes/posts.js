const express = require('express')

const postController = require('../controllers/posts')

const router = express.Router()

router.get('/', postController.getIndex)

router.get('/posts', postController.getPosts)

router.get('/posts/:postId', postController.getPost)

router.post('/add-post', postController.addPost)

module.exports = router

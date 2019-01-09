import { get, post } from './api-client'

export default {
  getPosts: () => get('posts'),
  addPost: item => {
    return post('add-post', item)
  },
}

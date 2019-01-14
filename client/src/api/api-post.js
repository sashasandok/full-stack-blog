import { get, post, del } from './api-client'

export default {
  getPosts: () => get('posts'),
  addPost: item => post('add-post', item),
  deletePost: id => del(`posts/${id}`),
}

import { get, post, del, put } from './api-client'

export default {
  getPosts: () => get('posts'),
  addPost: item => post('add-post', item),
  deletePost: id => del(`posts/${id}`),
  updatePost: item => put(`posts/${item.id}`, item),
}

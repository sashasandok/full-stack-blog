// import moment from 'moment'

export default post => {
  return {
    id: post._id,
    title: post.title,
    content: post.content,
    date: post.date,
  }
}

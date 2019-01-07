// require models

exports.getIndex = (req, res, next) => {
  res.send('<h1>Index root route</h1>')
  console.log('Index route')
}

exports.getPosts = (req, res, next) => {
  res.send('<h1>Get many posts route</h1>')
  console.log('get Posts')
}

exports.getPost = (req, res, next) => {
  res.send('<h1>Get one post by id route</h1>')
  console.log('get Post by id')
}

export default params => {
  return new Promise((resolve, reject) => {
    if (params.username === '' || params.username === undefined) {
      reject('Username is required.')
    }
    if (params.username.length < 2 || params.username.length > 30) {
      reject('Invalid username: minimum of 2 characters, maximum of 30 characters.')
    }
    resolve(params)
  })
}

export default params => {
  return new Promise((resolve, reject) => {
    if (params.code === '' || params.code === undefined) {
      reject('Confirmation code is required.')
    }
    if (params.username === '' || params.username === undefined) {
      reject('Username is required.')
    }
    if (params.username.length < 2 || params.username.length > 30) {
      reject('Invalid username: minimum of 2 characters, maximum of 30 characters.')
    }
    const username_pattern = new RegExp('^(?!_)[a-zA-Z0-9_]{1,48}(?<!_)$')
    if (!username_pattern.test(params.username)) {
      reject('Invalid username: Alphanumeric and underscore characters only (underscore may not lead or follow username.)')
    }
    if (params.password === '' || params.password === undefined) {
      reject('Password is required.')
    }
    if (params.password.length < 8 || params.password.length > 130) {
      reject('Invalid password: minumum of 8 characters, maximum of 130 characters.')
    }
    const password_pattern = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,130}$')
    if (!password_pattern.test(params.password)) {
      reject('Invalid password: See password requirements.')
    }
    resolve(params)
  })
}

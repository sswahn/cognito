import model from  './Model.js'

const confirmForgotPassword = async event => {
  try {
    const body = JSON.parse(event.body)
    return model.post(body)
  } catch (error) {
    throw new Error(error)
  }
}

export default confirmForgotPassword

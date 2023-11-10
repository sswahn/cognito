import validator from './Validator.js'
import model from './Model.js'

const login = async event => {
  try {
    const body = JSON.parse(event.body)
    const params = await validator(body)
    return model.authUser(params)
  } catch (error) {
    throw new Error(error)
  }
}

export default login

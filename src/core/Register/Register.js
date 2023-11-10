import validator from './Validator.js'
import model from './Model.js'

const register = async event => {
  try {
    const body = JSON.parse(event.body)
    const params = await validator(body)
    const user = await model.createUser(params)
    return model.addToGroup(params)
  } catch (error) {
    throw new Error(error)
  }
}

export default register

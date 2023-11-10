import validator from './Validator.js'
import model from './Model.js'

const register = async event => {
  try {
    const body = JSON.parse(event.body)
    const params = await validator(body)
    const user = await model.createUser(params)
    await model.addToGroup(params)
    return  model.addToTable(user.UserSub, params) 
  } catch (error) {
    throw new Error(error)
  }
}

export default register

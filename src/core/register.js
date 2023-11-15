import { CognitoIdentityProviderClient, SignUpCommand, AdminAddUserToGroupCommand } from '@aws-sdk/client-cognito-identity-provider'

const createUser = async (username, password, email) => {
  const values = {
    ClientId: process.env.CLIENT_ID,
    Username: username,
    Password: password,
    UserAttributes: [{
      Name: 'email',
      Value: email
    }]
  }
  const client = new CognitoIdentityProviderClient()
  const command = new SignUpCommand(values)
  return client.send(command)
}
  
const addToGroup = async (username, group) => {
  if (!group) {
    return
  }
  const values = {
    GroupName: group,
    UserPoolId: process.env.USER_POOL_ID,
    Username: username
  }
  const client = new CognitoIdentityProviderClient()
  const command = new AdminAddUserToGroupCommand(values)
  return client.send(command)
}

const register = async (username, password, email, group = undefined) => {
  if (typeof username !== 'string') {
    throw new TypeError('First argument must be of type string.')
  }
  if (typeof password !== 'string') {
    throw new TypeError('Second argument must be of type string.')
  }
  if (typeof email !== 'string') {
    throw new TypeError('Third argument must be of type string.')
  }
  if (group && typeof group !== 'string') {
    throw new TypeError('Fourth argument must be of type string.')
  }
  try {
    const userAdded = await createUser(username, password, email)
    const groupAdded =  await addToGroup(username, group)
    return {userAdded, groupAdded}
  } catch (error) {
    throw new Error(`register: ${error}`)
  }
}

export default register

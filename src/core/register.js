import { CognitoIdentityProviderClient, SignUpCommand, AdminAddUserToGroupCommand } from '@aws-sdk/client-cognito-identity-provider'

const createUser = (username, password, email) => {
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
  
const addToGroup = (username, group) => {
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
  try {
    const createUser = await model.createUser(username, password, email)
    const addToGroup =  await model.addToGroup(username, group)
    return {createUser, addToGroup}
  } catch (error) {
    throw new Error(error)
  }
}

export default register

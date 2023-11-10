import { CognitoIdentityProviderClient, SignUpCommand, AdminAddUserToGroupCommand } from '@aws-sdk/client-cognito-identity-provider'

const Model = params => {
    
  const createUser = params => {
    const values = {
      ClientId: process.env.CLIENT_ID,
      Username: params.username,
      Password: params.password,
      UserAttributes: [{
        Name: 'email',
        Value: params.email
      }]
    }
    const client = new CognitoIdentityProviderClient()
    const command = new SignUpCommand(values)
    return client.send(command)
  }
  
  const addToGroup = params => {
    const values = {
      GroupName: process.env.GROUP,
      UserPoolId: process.env.USER_POOL_ID,
      Username: params.username
    }
    const client = new CognitoIdentityProviderClient()
    const command = new AdminAddUserToGroupCommand(values)
    return client.send(command)
  }
  
  return { createUser, addToGroup }
}

export default Model()

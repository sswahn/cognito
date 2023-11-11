import { CognitoIdentityProviderClient, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider'

const login = async (username, password) => {
  try {
    const values = {
      ClientId: process.env.CLIENT_ID,
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters : {
        USERNAME: username,
        PASSWORD: password
      }
    }
    const client = new CognitoIdentityProviderClient()
    const command = new InitiateAuthCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(error)
  }
}

export default login

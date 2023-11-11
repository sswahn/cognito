import { CognitoIdentityProviderClient, ConfirmForgotPasswordCommand } from '@aws-sdk/client-cognito-identity-provider'

const confirmForgotPassword = async (code, username, password) => {
  try {
    const values = {
      ClientId: process.env.CLIENT_ID,
      ConfirmationCode: code,
      Username: username,
      Password: password
    }
    const client = new CognitoIdentityProviderClient()
    const command = new ConfirmForgotPasswordCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(error)
  }
}

export default confirmForgotPassword

import { CognitoIdentityProviderClient, ForgotPasswordCommand } from '@aws-sdk/client-cognito-identity-provider'

const forgotPassword = async (username) => {
  try {
    const values = {
      ClientId: process.env.CLIENT_ID,
      Username: username
    }
    const client = new CognitoIdentityProviderClient()
    const command = new ForgotPasswordCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(error)
  }
}

export default forgotPassword

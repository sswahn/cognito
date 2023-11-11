import { CognitoIdentityProviderClient, ConfirmForgotPasswordCommand } from '@aws-sdk/client-cognito-identity-provider'

const Model = () => {
  
  const post = params => {
    const values = {
      ClientId: process.env.CLIENT_ID,
      ConfirmationCode: params.code,
      Username: params.username,
      Password: params.password
    }
    const client = new CognitoIdentityProviderClient()
    const command = new ConfirmForgotPasswordCommand(values)
    return client.send(command)
  }
  
  return { post }
}

export default Model()

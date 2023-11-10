import { CognitoIdentityProviderClient, ForgotPasswordCommand } from '@aws-sdk/client-cognito-identity-provider'

const ForgotPasswordModel = () => {
  
  const post = params => {
    const values = {
      ClientId: process.env.CLIENT_ID,
      Username: params.username
    }
    const client = new CognitoIdentityProviderClient()
    const command = new ForgotPasswordCommand(values)
    return client.send(command)
  }

  return { post }
}

export default ForgotPasswordModel()

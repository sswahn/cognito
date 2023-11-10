import { CognitoIdentityProviderClient, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider'

const LoginModel = () => {

  const authUser = params => {
    const values = {
      ClientId: process.env.CLIENT_ID,
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters : {
        USERNAME: params.username,
        PASSWORD: params.password
      }
    }
    const client = new CognitoIdentityProviderClient()
    const command = new InitiateAuthCommand(values)
    return client.send(command)
  }
  
  return { authUser }
}

export default LoginModel()

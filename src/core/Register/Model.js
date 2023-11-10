import { CognitoIdentityProviderClient, SignUpCommand, AdminAddUserToGroupCommand } from '@aws-sdk/client-cognito-identity-provider'
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import crypto from 'crypto'

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
  
  const addToTable = (id, params) => {
    const date = new Date().toISOString()
    const values = {
      TableName: process.env.USERS_TABLE,
      Item: {
        partition_key: { S: id },
        username: { S: params.username },
        email: { S: params.email },
        avatar: { S: '' },
        date_created: { S: date },
        date_updated: { S: date }
      },
      ReturnValues: "ALL_OLD"
    }
    const client = new DynamoDBClient()
    const command = new PutItemCommand(values)
    return client.send(command) 
  }
  
  return { createUser, addToGroup, addToTable }
}

export default Model()

# Cognito · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/cognito/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/cognito)

Cognito is a robust AWS Cognito login system tailored for Node.js applications. It offers a comprehensive set of features to streamline user registration, authentication, and password management securely.  

## Features
- **User Registration**: Easily integrate user registration functionality into your application using the register function, allowing users to create accounts securely.
- **User Authentication**: Implement secure user authentication with the login function, providing a seamless and safe login experience for your users.
- **Password Recovery**: Enable users to recover their passwords effortlessly with the forgotPassword function, initiating a straightforward password recovery process.
- **Password Reset Confirmation**: Allow users to confirm and complete the password reset process using the confirmForgotPassword function, ensuring a secure and user-friendly experience.
- **Environment Variable Support**: Leverage Lambda environment variables to securely manage sensitive information and configuration settings within your Node.js code.
- **Flexible Integration**: Integrate the authentication library seamlessly into your Node.js application, providing a foundation for secure and scalable user management.


## Installation  
Install using npm.  
```bash
npm install @sswahn/cognito
```

## Usage  

### Import
```javascript
import cognito from '@sswahn/cognito'
```  

### Register
The `register` function handles user registration, creating a new user, and with the optional group parameter, adding them to a specified group. 
```javascript
const response = await cognito.register(username, password, email, group)
```  

### Login
The `login` function facilitates user authentication with login credentials.
```javascript
const response = await cognito.login(username, password)
```  

### Forgot Password
The `forgotPassword` function initiates the password recovery process by emailing a confirmation code.  
```javascript
const response = await cognito.forgotPassword(username)
```

### Confirm Forgot Password
The `confirmForgotPassword` function handles the confirmation of a user-initiated password reset and updates the user's password.  
```javascript
const response = await cognito.confirmForgotPassword(code, username, password)
```

### Decode Token
The `decodeToken` function is a utility function used for decoding JWT's issued by Cognito.  
```javascript
const response = await cognito.login(username, password)
const payload = cognito.decodeToken(response.AuthenticationResult.IdToken)
```

## Environmental Variables
Ensure the following environmental variables are set:

- CLIENT_ID: The name of your DynamoDB table. All functions require a `CLIENT_ID` environmental variable.
- USER_POOL_ID: The name of your User Pool. Required if adding registered users to a group.

## License
Cognito is [MIT Licensed](https://github.com/sswahn/cognito/blob/main/LICENSE)

# Cognito 

An AWS Cognito login system, for use with Lambda serverless functions.  

## Features
- **User Registration**: Easily integrate user registration functionality into your application using the register function, allowing users to create accounts securely.
- **User Authentication**: Implement secure user authentication with the login function, providing a seamless and safe login experience for your users.
- **Password Recovery**: Enable users to recover their passwords effortlessly with the forgotPassword function, initiating a straightforward password recovery process.
- **Password Reset Confirmation**: Allow users to confirm and complete the password reset process using the confirmForgotPassword function, ensuring a secure and user-friendly experience.
- **Environment Variable Support**: Leverage Lambda environment variables to securely manage sensitive information and configuration settings within your Node.js code.
- **Error Handling**: Benefit from robust error handling mechanisms using try-catch blocks, ensuring smooth and reliable execution even in the face of unexpected issues.
- **Flexible Integration**: Integrate the authentication library seamlessly into your Node.js application, providing a foundation for secure and scalable user management.


## Installation  
Install using npm.  
```bash
npm install @sswahn/cognito
```

## Usage  
### Import
```javascript
import cognito from '@sswahn/cpgnito'
```

### Register
The `register` function handles user registration, parsing and validating registration data before creating a new user and adding them to a specified group.
```javascript
const response = await cognito.register(event)
```  

### Login
The login function facilitates user authentication, parsing and validating login credentials before attempting to authenticate the user.  
```javascript
const response = await cognito.login(event)
```  

### Forgot Password
The forgotPassword function initiates the password recovery process by parsing and validating user information, typically involving sending a reset link or temporary password.  
```javascript
const result = await cognito.forgotPassword(event)
```

### Confirm Forgot Password
The confirmForgotPassword function handles the confirmation of a user-initiated password reset, parsing and validating confirmation details before updating the user's password.  
```javascript
const result = await cognito.confirmForgotPassword(event)
```

## License
Cognito is [MIT Licensed](https://github.com/sswahn/cognito/blob/main/LICENSE)

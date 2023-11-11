# Cognito 

An AWS Cognito login system, for use with Lambda serverless functions.

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

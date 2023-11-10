# cognito 

An AWS Cognito login system, for use with Lambda serverless functions.

## Installation  
Install using npm.  
```bash
npm install @sswahn/cognito
```

## Usage  
### Import
```javascript
import { register, login, forgotPassword, confirmForgotPassword } from '@sswahn/cpgnito'
```

### Register
```javascript
const response = await register(event)
```

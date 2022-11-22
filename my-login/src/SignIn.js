import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Home.css"


function SignIn() {
  return (
    <div className='container'>
      <form>
        <div className='textfield-container'>
        <TextField 
          id="outlined-basic" 
          label="Username" 
          variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <Button type="button" color="primary" className="form__custom-button" variant="outlined">
          Log in
        </Button>
      </form>
    </div>
  )
}

export default SignIn
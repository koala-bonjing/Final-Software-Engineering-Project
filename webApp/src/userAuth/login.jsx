import React from "react"
import { Box, TextField, Checkbox, FormControlLabel, FormGroup, Link } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import './login.css'

function LoginForm() {

  return (
    <>
 <Box className="wrapper">
  <Box className="flex flex-col justify-center items-center min-h-14 w-full">
    <h3 className="text-2xl font-semibold mb-6">Login</h3>
    
    <Box className="textfields flex flex-col w-full">

    <Box className="inputs">
    <Box  sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="username" label="Username" variant="standard" placeholder="Enter Username" required sx={{
              width: '270px',
              '.MuiInputBase-input': {
                color: '#727D73',
                fontWeight: '500',
                '&:hover': {
                  color: '#727D73',
                },
                fontFamily: 'Poppins'
              },
            }} />
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
            id="password"
            label="Password"
            variant="standard"
            placeholder="Enter Password"
            type="password"
            required
            sx={{
              width: '270px',
              '.MuiInputBase-input': {
                color: 'gray',
                fontWeight: '500',
                '&:hover': {
                  color: 'gray',
                },
                fontFamily: 'Poppins'
              },
            }}
          />

      </Box>
    </Box>
    </Box>
    
    <FormGroup sx={{ display: 'flex', alignItems: 'flex-end' }}>
  <FormControlLabel
    control={<Checkbox />}
    label="Remember me"
    sx={{
      '.MuiFormControlLabel-label': {
        fontFamily: 'Poppins, sans-serif',
        color: '#789DBC',
        '&:hover': {
          color: '#789DBC',
        },
      },
    }}
  />
</FormGroup>


    <Link href="#" underline="hover" sx={{ color: '#37AFE1' }}>Forgot password</Link>
    </Box>
   
   
    <button className="btn btn-primary mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" type="submit">
      LOGIN
    </button>
    <p className="mt-4 text-center text-white ">
      Don't have an account yet?{" "}
      <a href="" className="text-blue-500 hover:underline">
        Sign Up Now!
      </a>
    </p>
  </Box>
</Box>



    </>
  )
}

export default LoginForm

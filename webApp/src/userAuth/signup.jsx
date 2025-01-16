import React from "react";
import { Box, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

function SignUpForm() {
  return (
    <>
      <Box className="wrapper flex flex-col justify-center items-center min-h-screen bg-slate-100 p-8 rounded-lg shadow-lg border-2 border-black max-w-md mx-auto">
        <Box className="flex flex-col justify-center items-center min-h-14 w-full">
          <h3 className="text-2xl font-semibold mb-6">Sign Up</h3>
          <Box className="textfields flex flex-col gap-4 w-full">
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="username"
                  label="Username"
                  variant="standard"
                  placeholder="Enter Username"
                  required
                  sx={{ width: "270px" }}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="email"
                  label="Email Address"
                  variant="standard"
                  placeholder="Enter Email Address"
                  type="email"
                  required
                  sx={{ width: "270px" }}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="password"
                  label="Password"
                  variant="standard"
                  placeholder="Enter Password"
                  type="password"
                  required
                  sx={{ width: "270px" }}
                />
              </Box>
            </Box>
          </Box>
          <button
            className="btn btn-primary mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            type="submit"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <a href="./login.jsx" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </Box>
      </Box>
    </>
  );
}

export default SignUpForm;

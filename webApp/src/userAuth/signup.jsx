import React from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  Icon,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import "./singup.css";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#EBEAFF",
            "--TextField-brandBorderHoverColor": "#F65C78",
            "--TextField-brandBorderFocusedColor": "#F0134D",
            "--TextField-labelHoverColor": "#F65C78", // Define label hover color
            "--TextField-labelFocusedColor": "#ffffff", // Color when label is focused

            "& label": {
              transition: "color 0.3s", // Add transition for smooth effect
            },

            // Hover effect on the label itself
            "&:hover label": {
              color: "var(--TextField-labelHoverColor)", // Change label color on hover
            },

            "& label.Mui-focused": {
              color: "var(--TextField-labelFocusedColor)", // White color when focused
            },
          },
        },
      },

      MuiInput: {
        styleOverrides: {
          root: {
            // Default border before focus
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },

            // Hover state for border
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },

            // Focused state with gradient on bottom border
            "&.Mui-focused::after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

function SignUpForm() {
  const outerTheme = useTheme();
  return (
    <Box className="wrapper">
      <Box className="flex flex-col justify-center items-center min-h-14 w-full">
        <h6
          className="flex justify-center items-center text-white w-full text-center mb-6 "
          style={{ fontFamily: "Lexend Zetta", fontSize: "10px" }}
        >
          COMPUTER COMMUNICATION DEVELOPMENT INSTITUTE
        </h6>
        <h3 className="text-2xl mb-6 ">Sign Up</h3>

        <Box className="textfields flex flex-col w-full">
          <Box className="inputs">
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <PersonIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                  <TextField
                    id="username"
                    label="Username"
                    variant="standard"
                    placeholder="Enter Username"
                    required
                    autoComplete="off"
                    noValidate
                    className="username text-white font-sans "
                    sx={{
                      width: "270px",
                      ".MuiInputBase-input": {
                        color: "white",
                        fontWeight: "500",
                        "&:hover": {
                          color: "white",
                        },
                        fontFamily: "Poppins",
                      },
                      ".MuiInputLabel-root": {
                        color: "white",
                        fontFamily: "Poppins",
                      },
                    }}
                  />
                </Box>
              </ThemeProvider>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <EmailIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                  <TextField
                    id="email"
                    label="Email Address"
                    variant="standard"
                    placeholder="Enter Email Address"
                    required
                    autoComplete="new-password"
                    noValidate
                    className="email text-white font-sans"
                    sx={{
                      width: "270px",
                      ".MuiInputBase-input": {
                        color: "white",
                        fontWeight: "500",
                        "&:hover": {
                          color: "white",
                        },
                        fontFamily: "Poppins",
                      },
                      ".MuiInputLabel-root": {
                        color: "white",
                        fontFamily: "Poppins",
                      },
                    }}
                  />
                </Box>
              </ThemeProvider>

              <ThemeProvider theme={customTheme(outerTheme)}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    color: "white",
                  }}
                >
                  <LockIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                  <TextField
                    id="password"
                    label="Password"
                    variant="standard"
                    placeholder="Enter Password"
                    type="password"
                    required
                    autoComplete="off"
                    sx={{
                      width: "270px",
                      ".MuiInputBase-input": {
                        color: "#fff",
                        fontWeight: "500",
                        "&:hover": {
                          color: "#fff",
                        },
                        fontFamily: "Poppins",
                      },
                      ".MuiInputLabel-root": {
                        color: "white",
                        fontFamily: "Poppins",
                      },
                      ".MuiInputAdornment-root": {
                        color: "white",
                      },
                    }}
                  />
                </Box>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
        <button
          className="btn btn-primary mt-6 w-full py-2 bg-transparent border-2 border-white text-white rounded-md hover:bg-blue-700 hover:border-blue-700 transition-all duration-300"
          type="submit"
        >
          SIGN UP
        </button>
        <p className="mt-4 text-center text-white ">
          Already has an account?{" "}
          <a href="../signup.jsx" className="text-blue-500 hover:underline">
            Sign In here!
          </a>
        </p>
      </Box>
    </Box>
  );
}

export default SignUpForm;

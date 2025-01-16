import React from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "./login.css";
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
            "--TextField-brandBorderHoverColor": "#fff",
            "--TextField-brandBorderFocusedColor": "#0D92F4",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

function LoginForm() {
  const outerTheme = useTheme();
  return (
    <>
      <Box className="wrapper">
        <Box className="flex flex-col justify-center items-center min-h-14 w-full">
          <h6
            className="flex justify-center items-center text-white w-full text-center mb-6 "
            style={{ fontFamily: "Lexend Zetta", fontSize: "10px" }}
          >
            COMPUTER COMMUNICATION DEVELOPMENT INSTITUTE
          </h6>

          <h3 className="text-2xl mb-6 ">Login</h3>
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
                      className="username text-white font-sans"
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
                          color: "white", // White color for the visibility icon
                        },
                      }}
                    />
                  </Box>
                </ThemeProvider>
              </Box>
            </Box>

            <FormGroup sx={{ display: "flex", alignItems: "flex-end" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#FF6969",
                      },
                    }}
                  />
                }
                label="Remember me"
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontFamily: "Poppins, sans-serif",
                    color: "white",
                    "&:hover": {
                      color: "geay",
                    },
                  },
                }}
              />
            </FormGroup>
            <div className="max-w-xs break-words">
              <Link
                href="#"
                underline="hover"
                sx={{ color: "white" }}
                className="inline-block"
              >
                Forgot password
              </Link>
            </div>
          </Box>

          <button
            className="btn btn-primary mt-6 w-full py-2 bg-transparent border-2 border-white text-white rounded-md hover:bg-blue-700 hover:border-blue-700 transition-all duration-300"
            type="submit"
          >
            LOGIN
          </button>

          <p className="mt-4 text-center text-white ">
            Don't have an account yet?{" "}
            <a href="../signup.jsx" className="text-blue-500 hover:underline">
              Sign Up Now!
            </a>
          </p>
        </Box>
      </Box>
    </>
  );
}

export default LoginForm;

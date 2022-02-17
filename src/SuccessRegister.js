import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import THRIVELogo from "./thrivelogo191x176.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
const theme = createTheme();
export const SuccessRegister = ({ email, fullName }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor: "lightcyan",
          }}
        >
          {/*
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <LockOutlinedIcon />
            </Avatar>
        */}
          <img src={THRIVELogo} alt="THRIVE" style={{ marginBottom: 20 }} />
          <Typography component="h1" variant="h5">
            {fullName}, please activate your THRIVE account ..
          </Typography>
          <Typography align="center">
            A message has been sent to: {email}
          </Typography>
          <Box>
            Please check your email and click on the link to activate your
            THRIVE account. Please note the verification email may automatically
            be placed in your spam folder if you've never had any previous
            emails from us.
          </Box>
          <Box>
            Once you have activated your account please,{" "}
            <Link to="/login">Login Here</Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

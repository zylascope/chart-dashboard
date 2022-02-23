import ErrorSharp from "@mui/icons-material/ErrorSharp";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
const useStyles = makeStyles({
  headerStyles: {
    paddingTop: "20",
    display: "flex",
    flexDirection: "row",

    width: "400",
    height: "400",
  },
});
export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  const handleInputChange = (e) => {
    //console.log("value:", value);
    setEmail(e.target.value);
    setErrors({
      ...errors,
      email: "",
    });
  };
  const validate = () => {
    setErrors({
      email: email ? "" : "Email is required",
    });
    return Object.values(errors).every((x) => x === "");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("email", email);
    }
  };
  return (
    <>
      <Container maxWidth="sm" bgcolor="yellow">
        <Box component="header" sx={classes.headerStyles}>
          <CssBaseline />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h1"
                fontWeight="600"
                align="center"
                marginTop={10}
                paddingRight={8}
              >
                Reset Password
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h6" paddingX={5}>
                Please enter your email address. You will receive an email
                message with instructions on how to reset your password.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3, mx: 8 }}
        >
          <Grid container spacing={2} paddingRight={6}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                autoFocus
                id="email"
                label="Email Address"
                type="email"
                name="email"
                onChange={handleInputChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Get New Password
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

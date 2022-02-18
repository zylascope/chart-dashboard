import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import THRIVELogo from "./thrivelogo191x176.png";
import { lime, pink } from "@mui/material/colors";
import { positions } from "@mui/system";
import AutoFixOffSharp from "@mui/icons-material/AutoFixOffSharp";
//import THRIVELogo from './TP_logo_trans.png';
import axios from "axios";
import { useHistory } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://strive2thrive.earth/">
        Strive2Thrive.Earth
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [invalidDetails, setInvalidDetails] = React.useState("");
  const history = useHistory();
  const validate = () => {
    const temp = {};
    temp.email = email ? "" : "Email is required";
    temp.password = password ? "" : "Password is required";
    console.log("temp:", { ...temp });
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    if (validate()) {
      console.log("Email:", email);
      console.log("Password:", password);
      axios
        .post(
          "https://phpbackend.azurewebsites.net/php-login-registration-api/login.php",
          null,
          {
            params: {
              username: email,
              password,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            console.log("longin success:", response);
            history.push("/dashboard");
            // <Redirect to="/dashboard" />;
          } else {
            console.log("login failed", response);
            // setInvalidDetails("Invalid Email or Password");
            // errors.invalid = "Invalid Email or Password";
            setErrors({
              ...errors,
              invalid: "Invalid Email or Password",
            });
            // const errorMessage = response.data.message;
            // if (errorMessage.includes("password")) {
            //   setErrors({
            //     ...errors,
            //     password: errorMessage,
            //   });
            // }
            // if (errorMessage.includes("mail")) {
            //   setErrors({
            //     ...errors,
            //     email: errorMessage,
            //   });
            // }
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main">
        <CssBaseline />
        {/* sx={{ height: "100vh" }} */}
        <Grid
          item
          xs={false}
          // sm={6}
          // md={8}
          sx={{
            backgroundImage:
              "url(https://platform.strive2thrive.earth/images/thrive-start-header-bg-cr1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid container spacing={2}>
            <CssBaseline />
            <Grid item xs={12} sm={6} md={8}>
              <Box
                mt={20}
                p={3}
                color="#08386B"
                // sx={{ width: "100%", height: "50%", position: "absolute" }}
              >
                <Typography variant="h3" fontWeight={800} fontSize="33px">
                  THERE ARE NO SUSTAINABLE ENTITIES ON AN UNSUSTAINABLE EARTH
                </Typography>
                <Typography
                  component="h6"
                  fontWeight={800}
                  fontStyle="italic"
                  lineHeight={3}
                >
                  {" "}
                  -MORRIS D FEDELI, PROJECT LEAD
                </Typography>
              </Box>
            </Grid>
            {/* <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ backgroundColor: "#fff", opacity: "0.8" }}
        >
          <Typography component="h1">Thrive quote</Typography>
        </Grid> */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              component={Paper}
              elevation={2}
              square
            >
              <CssBaseline />
              <Box
                sx={{
                  // my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/*
                <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <LockOutlinedIcon />
                </Avatar> 
            */}

                <img
                  src={THRIVELogo}
                  alt="THRIVE"
                  style={{ marginBottom: 50 }}
                />
                <Typography component="h1" variant="h5">
                  Sign in to your account
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    disabled
                    error={errors.invalid ? true : false}
                    helperText={errors.invalid}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleInputChange}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleInputChange}
                    error={errors.password ? true : false}
                    helperText={errors.password}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Stay logged in"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/get-new-password" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Link href="/dashboard" variant="body2">
                        {"Go to dashboard"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

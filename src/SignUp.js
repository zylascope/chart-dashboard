import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import THRIVELogo from "./thrivelogo191x176.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Alert,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  AlertTitle,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { Recaptcha } from "./Recaptcha";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { SuccessRegister } from "./SuccessRegister";
//import ReCaptchaV2 from 'react-google-recaptcha';

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
//site-key=6Lev6G0eAAAAAJBIO4JURRuj-YpulVkhPwoaxuwA
// REACT_APP_SITE_KEY=<site-key>
// REACT_APP_SECRET_KEY=<secret-key></secret-key>
//const [values, setValue] = React.useState;

//set deafault values for the form fields
const defaultValues = {
  title: "",
  fullName: "",
  email: "",
  // industryOrSector:'',
  instituteOrOrganization: "",
  // role:'',
  password: "",
  confirmPassword: "",
  token: "",
  userName: "",
};
export default function SignUp(props) {
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [success, setSuccess] = React.useState(false);
  // const[isCaptchaVerified, setIsCapthaVerified]= React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   fullName: data.get('fullName'),
    //   title: data.get('title'),
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    // https://phpbackend.azurewebsites.net/php-login-registration-api/register.php?
    // username=TEST421&email=mrnormal421@sharklasers.com&password=m12345678&title=Mr&fullname=Hardly
    // Normal421&organization=The Normal Society
    // {
    //     "success": 1,
    //     "status": 201,
    //     "message": "You have successfully registered. Please check your email and click the link to activate your account."
    // }

    if (validate()) {
      // console.log(formValues);
      axios
        .post(
          "https://phpbackend.azurewebsites.net/php-login-registration-api/register.php",
          null,
          {
            params: {
              username: formValues.userName,
              email: formValues.email,
              password: formValues.password,
              title: formValues.title,
              fullname: formValues.fullName,
              organization: formValues.instituteOrOrganization,
              reCAPTCHA_token: formValues.token,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            console.log(response.message);
            setSuccess(true);
          } else {
            console.log("Not registered", response);

            //props.history.push("/login");
            console.log("Not registered error message", response.data.message);
            const errorMessage = response.data.message;
            if (errorMessage.includes("mail")) {
              setErrors({
                ...errors,
                email: errorMessage,
              });
            }
            if (errorMessage.includes("password")) {
              setErrors({
                ...errors,
                password: errorMessage,
              });
            }
            if (errorMessage.includes("name")) {
              setErrors({
                ...errors,
                userName: errorMessage,
              });
            }
            if (errorMessage.includes("reCAPTCHA")) {
              setErrors({
                ...errors,
                invalidRecaptcha: errorMessage,
              });
            }
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  // var signUpForm_title="";
  // const handleChange_title = (event) => {
  //   signUpForm_title = event.target.value;
  //   //setValue(event.target.value);
  //   console.log(signUpForm_title);
  // }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  // // setFormValues(formValues => ({...formValues,[name]:value}));
  // validate();
  // }
  const validate = () => {
    console.log("inside validate..");
    const temp = {};
    temp.userName = formValues.userName
      ? /.{3,}/.test(formValues.userName)
        ? ""
        : "User Name must be atleast 3 characters long"
      : "User name is required";
    temp.title = formValues.title ? "" : "Title is required";
    temp.fullName = formValues.fullName ? "" : "Full name is required";
    // temp.email=formValues.email?(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(formValues.email)?"":"Email is not valid":"Email is required"
    temp.email = formValues.email
      ? /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          formValues.email
        )
        ? ""
        : "Email is not valid"
      : "Email is required";
    temp.instituteOrOrganization = formValues.instituteOrOrganization
      ? ""
      : "Institute or Organization is required";
    temp.password = formValues.password
      ? /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          formValues.password
        )
        ? ""
        : //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
          "Password must be atleast 8 characters long and should contain atleast one uppercase letter, one lowercase letter, one number and one special character"
      : "Password is required";
    temp.confirmPassword = formValues.confirmPassword
      ? formValues.password === formValues.confirmPassword
        ? ""
        : " Password  and Confirm Password didn't match"
      : "Confirm password is required";

    // temp.industryOrSector=formValues.industryOrSector?"":"Industry or Sector is required"
    // temp.role=formValues.role?"":"Role is required"

    console.log("temp:", { ...temp });
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };
  // function handleCaptchaChange(value) {
  //   console.log('Captcha value:',value);
  //   setIsCapthaVerified(true);
  // }
  const handleCaptchaChange = (token) => {
    setFormValues((currentForm) => {
      return { ...currentForm, token };
    });
    setErrors({
      ...errors,
      invalidRecaptcha: "",
    });

    console.log("Captcha value:", token);
  };
  const handleCaptchaExpire = () => {
    console.log("Captcha expired");
    setFormValues((currentForm) => {
      return { ...currentForm, token: null };
    });
    setErrors({
      ...errors,
      invalidRecaptcha: "",
    });
  };

  return (
    <>
      {success ? (
        <SuccessRegister
          email={formValues.email}
          fullName={formValues.fullName}
        />
      ) : (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
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

              <img src={THRIVELogo} alt="THRIVE" style={{ marginBottom: 50 }} />

              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="title-select-label"
                        style={{
                          color: errors.title
                            ? "#d32f2f"
                            : "rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        Title
                      </InputLabel>
                      <Select
                        labelId="title-select-label"
                        id="title"
                        value={formValues.title}
                        label="Title"
                        type="text"
                        name="title"
                        onChange={handleInputChange}
                        error={errors.title ? true : false}
                      >
                        <MenuItem value={"Mr"}>Mr</MenuItem>
                        <MenuItem value={"Mrs"}>Mrs</MenuItem>
                        <MenuItem value={"Miss"}>Miss</MenuItem>
                        <MenuItem value={"Ms"}>Ms</MenuItem>
                        <MenuItem value={"Dr"}>Dr</MenuItem>
                        <MenuItem value={"Sir"}>Sir</MenuItem>
                      </Select>
                      <FormHelperText style={{ color: "#d32f2f" }}>
                        {errors.title}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="fullName"
                      label="Full Name"
                      name="fullName"
                      type="text"
                      value={formValues.fullName}
                      onChange={handleInputChange}
                      // error ={!!errors?.temp?.name}

                      error={errors.fullName}
                      helperText={errors.fullName}
                      // onBlur={()=>!!errors?errors.fullName:""}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={handleInputChange}
                      error={errors.email ? true : false}
                      helperText={errors.email}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="Industry-or-Sector" style={{color:errors.role?"#d32f2f":"rgba(0, 0, 0, 0.6)"}}>Industry or Sector</InputLabel>
                <Select 
                labelId='Industry-or-Sector'
                id="industryOrSector"
                label = "Industry or Sector"
                value={formValues.industryOrSector} 
                name="industryOrSector"
                onChange={handleInputChange}
                error = {errors.industryOrSector}
                 
                >
                  
                  <MenuItem value="Agribusiness">Agribusiness</MenuItem>
                  <MenuItem value="Asset & Wealth Management">Asset & Wealth Management</MenuItem>
                  <MenuItem value="Banking and Capital Markets">Banking and Capital Markets</MenuItem>
                  <MenuItem value="Construction & Transportation">Construction & Transportation</MenuItem>
                  <MenuItem value="Defense">Defense</MenuItem>
                  <MenuItem value="Education">Education</MenuItem>
                  <MenuItem value="Energy(Oil & Gas)">Energy(Oil & Gas)</MenuItem>
                  <MenuItem value="Entertainment & Media">Entertainment & Media</MenuItem>
                  <MenuItem value="Financial Services">Financial Services</MenuItem>
                  <MenuItem value="Government">Government</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                  <MenuItem value="Infrastructure">Infrastructure</MenuItem>
                  <MenuItem value="Insurance">Insurance</MenuItem>
                  <MenuItem value="Non-fot-profit(NFR)/ Non-government organization(NGO)">Non-fot-profit(NFR)/ Non-government organization(NGO)</MenuItem>
                  <MenuItem value="Power & Utilities">Power & Utilities</MenuItem>
                  <MenuItem value="Minings">Minings</MenuItem>
                  <MenuItem value="Retail & Consumer">Retail & Consumer</MenuItem>
                  <MenuItem value="Superannuation">Superannuation</MenuItem>
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                  
                  

                </Select>
                <FormHelperText style={{color:"#d32f2f"}}>{errors.industryOrSector}</FormHelperText>
                </FormControl> 
              </Grid>*/}
                  <Grid item xs={12}>
                    <TextField
                      id="institute-or-organization"
                      name="instituteOrOrganization"
                      label="Institute or Organization"
                      type="text"
                      fullWidth
                      required
                      value={formValues.instituteOrOrganization}
                      onChange={handleInputChange}
                      // error={errors.instituteOrOrganization}
                      error={errors.instituteOrOrganization ? true : false}
                      helperText={errors.instituteOrOrganization}
                    ></TextField>
                  </Grid>
                  {/* <Grid item xs={12}>
                <FormControl>
                  <FormLabel style={{color:errors.role?"#d32f2f":"rgba(0, 0, 0, 0.6)"}}>Role:</FormLabel>
                  <FormHelperText style={{color:"#d32f2f"}}>{errors.role}</FormHelperText>
                  
                  <RadioGroup
                  name="role"
                  value={formValues.role}
                  onChange={handleInputChange}
                  column
                  error={errors.role}
                  
                  >
                    
                    <FormControlLabel
                    key="Consumer/Private User"
                    value="Consumer/Private User"
                    control={<Radio size="small"/>}
                    label="Consumer/Private User"
                    />
                    <FormControlLabel
                    key="Business Leader/Corporate"
                    value="Business Leader/Corporate"
                    control={<Radio size="small"/>}
                    label="Business Leader/Corporate"
                    />
                    <FormControlLabel
                    key="Researcher/Academic"
                    value="Researcher/Academic"
                    control={<Radio size="small"/>}
                    label="Researcher/Academic"
                    />
                    <FormControlLabel
                    key="Data Analyst/Consultant"
                    value="Data Analyst/Consultant"
                    control={<Radio size="small"/>}
                    label="Data Analyst/Consultant"
                    />
                    <FormControlLabel
                    key="Policymaker/Government"
                    value="Policymaker/Government"
                    control={<Radio size="small"/>}
                    label="Policymaker/Government"
                    />
                    
                  </RadioGroup>
                </FormControl>
              </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleInputChange}
                      // error={errors.password}
                      error={errors.password ? true : false}
                      helperText={errors.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      onChange={handleInputChange}
                      // error={errors.confirmPassword}
                      error={errors.confirmPassword ? true : false}
                      helperText={errors.confirmPassword}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="userName"
                      label="User Name"
                      name="userName"
                      type="text"
                      value={formValues.userName}
                      onChange={handleInputChange}
                      // error ={!!errors?.temp?.name}

                      // error={errors.userName}
                      error={errors.userName ? true : false}
                      helperText={errors.userName}
                      // onBlur={()=>!!errors?errors.fullName:""}
                    />
                  </Grid>
                  {/*
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> 
            */}
                </Grid>

                <Grid item xs={12} marginTop="20px">
                  {/* <ReCaptchaV2 }
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={handleToken}`
            onExpire={handleExpire}
          /> */}

                  <Recaptcha
                    onCaptchaChange={handleCaptchaChange}
                    onCaptchaExpire={handleCaptchaExpire}
                    // error={errors.reCAPTCHA_token ? true : false}
                    // helperText={errors.reCAPTCHA_token}
                  />
                </Grid>
                {errors.invalidRecaptcha ? (
                  <Alert severity="error">{errors.invalidRecaptcha}</Alert>
                ) : (
                  ""
                )}
                {/* <TextField
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  disabled
                  error={errors.invalidRecaptcha ? true : false}
                  helperText={errors.invalidRecaptcha}
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // disabled={!isCaptchaVerified}
                  disabled={!formValues.token}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
          <Container>
            {/* <ReCAPTCHA
        sitekey="YOUR-SITE-KEY"
        onChange={onChange}
      /> */}
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

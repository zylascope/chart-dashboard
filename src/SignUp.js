import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import THRIVELogo from './thrivelogo191x176.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://strive2thrive.earth/">
        Strive2Thrive.Earth
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

//const [values, setValue] = React.useState;

//set deafault values for the form fields
const defaultValues= {
  title:'',
  fullName:'',
  email:'',
  industryOrSector:'',
  instituteOrOrganization:'',
  role:'',
  password:'',
  confirmPassword:'',
}
export default function SignUp() {
  const [formValues, setFormValues] = React.useState(defaultValues)
  const [errors,setErrors]=React.useState({})
  const handleSubmit = (event) => {
    
    event.preventDefault();

    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   fullName: data.get('fullName'),
    //   title: data.get('title'),
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
     if(validate())
       console.log(formValues)
  };

  // var signUpForm_title="";
  // const handleChange_title = (event) => {
  //   signUpForm_title = event.target.value;
  //   //setValue(event.target.value);
  //   console.log(signUpForm_title);
  // }
  const handleInputChange = (e)=>{
    
    const{name, value}=e.target;
    setFormValues({
      ...formValues,
      [name]:value,
    })
    setErrors({
      ...errors,
      [name]:""
    })

  }
  // // setFormValues(formValues => ({...formValues,[name]:value}));
  // validate();
  // }
  const validate=()=>{
    console.log("inside validate..")
    const temp={}
    temp.fullName=formValues.fullName?"":"Full name is required"
    temp.email=formValues.email?(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(formValues.email)?"":"Email is not valid":"Email is required"
    temp.instituteOrOrganization=formValues.instituteOrOrganization?"": "Institute or Organization is required"
    temp.password=formValues.password?"": "Password is required"
    temp.confirmPassword=formValues.confirmPassword?formValues.password===formValues.confirmPassword?"":" Password didn't match":"Confirm password is required"
    temp.industryOrSector=formValues.industryOrSector?"":"Industry or Sector is required"
    temp.role=formValues.role?"":"Role is required"
    console.log("temp:", {...temp})  
    setErrors({
      ...temp
    })
     return Object.values(temp).every(x=>x==="")
  }
  
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

        {/* 
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <LockOutlinedIcon />
            </Avatar> 
        */}

          <img src={THRIVELogo} alt="THRIVE" style={{marginBottom: 50}}/>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="title-select-label">Title</InputLabel>
                <Select
                    labelId="title-select-label"
                    id="title"
                    value={formValues.title}
                    label="Title"
                    type="text"
                    name='title'
                    onChange={handleInputChange}
                >
                    <MenuItem value={"Mr"}>Mr</MenuItem>
                    <MenuItem value={"Mrs"}>Mrs</MenuItem>
                    <MenuItem value={"Miss"}>Miss</MenuItem>
                    <MenuItem value={"Ms"}>Ms</MenuItem>
                    <MenuItem value={"Dr"}>Dr</MenuItem>
                    <MenuItem value={"Sir"}>Sir</MenuItem>
 
                </Select>
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
                  error={errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="institute-or-organization"
                  name="instituteOrOrganization"
                  label = "Institute or Organization"
                  type="text"
                  fullWidth
                  required
                  value= {formValues.instituteOrOrganization}
                  onChange={handleInputChange}
                  error = {errors.instituteOrOrganization}
                  helperText={errors.instituteOrOrganization}
                 >
                </TextField>
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
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
                  error={errors.password}
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
                  error={errors.confirmPassword}
                  helperText={errors.confirmPassword}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
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
    </ThemeProvider>
  );
}
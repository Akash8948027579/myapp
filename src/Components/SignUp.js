import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';


import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border:'1px solid #F3F2F7'
            
          }}
        >
          
          <Typography component="h1" variant="h5" sx={{padding:'10px'}}>
            Register with
          </Typography>
          <Stack direction="row" spacing={2} sx={{padding:'10px'}}>
            <Avatar sx={{m:1, bgcolor: 'black'}} > <FacebookOutlinedIcon/></Avatar> 
            <Avatar sx={{m:1, bgcolor: 'black'}} > <AppleIcon/></Avatar>
            <Avatar sx={{m:1, bgcolor: 'black'}} > <GoogleIcon/></Avatar>
          </Stack>
          
          
          
          <Grid sx={{m:1}} spacing={2}>or</Grid>

          
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, padding:'15px' }}>
            <Grid container spacing={2} >
              <Grid item xs={12}>
              Name <br/>
                <TextField fullWidth/>
              </Grid>
  
              <Grid item xs={12}>
              Email <br/>
                <TextField fullWidth/>
              </Grid>
              <Grid item xs={12}>
              Password<br/>
                <TextField fullWidth/>
              </Grid>
              <Grid item xs={12}>
              <FormControlLabel control={<Switch defaultChecked />} label="Remember me" />
              </Grid>
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
                <Link href="#" variant="body2">
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
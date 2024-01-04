import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box, Grid, Button, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { blue, red } from '@mui/material/colors';
import image from './Assets/Image.png';
import img1 from './Assets/logo-creative-tim-black.png';
import img2 from './Assets/Icon.png';
import img3 from './Assets/Icon3.png'
import img4 from './Assets/sign.png'
import img5 from './Assets/key.png'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './Dashboard.css';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';




const dashboard = () => {
  return (
    
    <> 
    <img className='img' style={{ width: '100%', height: '520px'}} alt='' src={image} />
      <Box className='box' >
        <AppBar direction={'row'} spacing={2} style={{ width: '100%', height: '100%', backgroundColor: 'transparent', position: 'relative',display: {sx: 'none', md: 'flex'}, flexDirection:'row', marginTop: -500 }}>
        {/* PURITY UI Dashboard */}
        {/* <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}> */}
        <img style={{width: '22px', height: '22px', marginLeft: '160px', marginTop:'10px'}} alt='' src={img1}/>
          <Button style={{ position: 'absolute', color: 'white', marginLeft: 180, fontSize: 14, fontFamily: 'Helvetica', fontWeight: '700'}}>PURITY UI DASHBOARD</Button>
          {/* </Grid> */}
{/* Dashboard */}
          {/* <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}> */}
          <img style={{width: '15px', height: '15px', marginLeft: '300px', marginTop:'10px'}} alt='' src={img2}/>
          <Button color="inherit" style={{ color: 'white', marginLeft: 5, fontSize: 10, fontFamily: 'Helvetica',fontWeight: '700', width: '65.5px', height: '15px', marginTop: 10 }}>DASHBOARD</Button>
          {/* </Grid> */}
          {/* Profile */}
          {/* <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}> */}
          <img style={{width: '15px', height: '15px', marginLeft: '50px', marginTop:'10px'}} alt='' src={img3}/>
          <Button color="inherit" style={{ color: 'white', fontSize: 10, fontFamily: 'Helvetica',fontWeight: '700', marginLeft: '-4px'}}>PROFILE</Button>
          {/* </Grid> */}
{/* Sign Up */}
          {/* <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}> */}
          <img style={{width: '15px', height: '15px', marginLeft: '30px', marginTop:'10px'}} alt='' src={img4}/>
          <Button color="inherit" style={{ color: 'white', fontSize: 10, fontFamily: 'Helvetica',fontWeight: '700', marginLeft: '-3px'}}>SIGN UP</Button>
          {/* </Grid> */}
{/* Sign in */}
          {/* <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}> */}
          <img style={{width: '15px', height: '15px', marginLeft: '10px', marginTop:'10px'}} alt='' src={img5}/>
          <Button color="inherit" style={{ color: 'white', fontSize: 10, fontFamily: 'Helvetica',fontWeight: '700', marginLeft:'-5px'}}>SIGN IN</Button>
          {/* </Grid> */}
          {/* Free download */}
          {/* <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}> */}
          <Button style={{ marginRight: '-45px', width: 120, height: 33, textAlign: 'center', color: 'black', backgroundColor: 'white', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', borderRadius: 34.50}}>Free Download</Button>
          {/* </Grid> */}
        </AppBar>
        

        <CardContent sx={{
          textAlign: 'center', marginTop: 10
        }} >
          <Typography className='welcome' variant="h4" component="div" sx={{ text: "bold", color: 'white', fontSize: 32, fontFamily: 'Helvetica' }}>
            Welcome!
          </Typography>
          <Typography variant="h7" color="text.secondary" sx={{ color: 'white', fontSize: 14, fontFamily: 'Helvetica', fontWeight: '400' }}>
            Use these awesome forms to login or create new <br />account in your project free.
          </Typography>

        </CardContent>


        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Paper sx={{ width: '452.5px', height: '713.5px', justifyContent: 'center', alignItems: 'center', border: 1, borderColor: 'white', borderWidth: 70, display: 'block', marginTop: 2, position: 'relative', height: '100%', borderRadius: 5 }}>
              <Typography component="h1" variant="h5" textAlign={'center'} marginBottom={2} sx={{color: '#2D3748', fontSize: 18, fontFamily: 'Helvetica', fontWeight: '700'}}>
                Register with
              </Typography>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ m: 1, bgcolor: 'white', border: '1px solid gray', color: '#2D3748' }} variant='rounded' > <FacebookOutlinedIcon /></Avatar>
                <Avatar sx={{ m: 1, bgcolor: 'white', border: '1px solid gray', color: '#2D3748' }} variant='rounded' > <AppleIcon /></Avatar>
                <Avatar sx={{ m: 1, bgcolor: 'white', border: '1px solid gray', color: '#2D3748' }} variant='rounded'> <GoogleIcon /></Avatar>
              </Stack>



              <Grid sx={{ m: 1 }} spacing={2} textAlign={'center'} variant="h6">or</Grid>

              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2} >
                  <Grid item xs={12}>
                    Name <br />
                    <TextField  fullWidth placeholder='Your full name' />
                  </Grid>

                  <Grid item xs={12}>
                    Email <br />
                    <TextField fullWidth placeholder='Your email address ' />
                  </Grid>
                  <Grid item xs={12}>
                    Password<br />
                    <TextField fullWidth placeholder='Your password' />
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
              
            </Paper>

            <Stack direction= {'row'} style={{width: '100%', height: '100%', marginLeft: -550, textAlign: 'center'}}>
              <span style={{color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word'}}>@ 2021, Made with ❤️ by </span>
              <span style={{color: '#38B2AC', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word'}}>Creative Tim</span>
              <span style={{color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word'}}> & </span>
              <span style={{color: '#38B2AC', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word'}}>Simmmple</span>
              <span style={{color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word'}}> for a better web</span>
              </Stack>

              <Stack className='footer' direction={'row'} style={{width: '100%', height: '100%', marginTop: -160, marginLeft: 800}}>
              <Grid style={{width: '30%', height: '100%', color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}>Creative Tim</Grid>
              <Grid style={{width: '30%', height: '100%', color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}>Simmmple</Grid>
              <Grid style={{width: '30%', height: '100%', color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}>Blog</Grid>
              <Grid style={{width: '30%', height: '100%', color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word', marginLeft: '-25px'}}>License</Grid>
              </Stack>
          </Box>
        </Container>
      </Box>
    </>

  )
}

export default dashboard

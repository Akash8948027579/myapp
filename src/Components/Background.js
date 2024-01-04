import { Box } from '@mui/material';
import React from 'react'
import { Grid, Button, Paper } from '@mui/material';
import image from './Assets/Image.png';
import img1 from './Assets/logo-creative-tim.png';
import img2 from './Assets/dash.png';
import img3 from './Assets/pro.png'
import img4 from './Assets/signup.png'
import img5 from './Assets/signin.png'
import img6 from './Assets/logo-colored_2x__1_-removebg-preview (1) 1.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Switch } from '@mui/material';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const Background = () => {
  return (
    <>
    <Box sx={{width:'600px', height:'750px', marginLeft: '740px', borderRadius:'15px', position: 'relative'}}> <img width={'600px'} height={'750px'} alt='' src={image}/>
    <Box sx={{width:'357.5px', height: '91.82px',backgroundColor: 'red', marginLeft: '130px', marginTop: '-420px'}} > <img src={img6} alt=''/></Box>
    </Box>
    
    
    {/* menu */}
    <Box sx={{ width: '987px', height: '70px', marginTop: '-730px', marginLeft : '200px', borderRadius : '5.5px', background: '#C4C4C4', position: 'absolute'}}>
    
    {/* logo */}
      <Box sx={{width: '300px', marginLeft: '40px', marginTop: '3px'}}>
      <Box sx={{width: '22px', height: '22px', paddingTop: '16px'}}> <img  src={img1} alt='' /> </Box>
      
      
<Typography sx={{width: '250px', height: '21px', paddingTop: '-15px', marginLeft: '30px', font: 'helvetica', fontWeight: 700, fontSize: '14px', lineHeight: '21px'}} > PURITY UI DASHBOARD</Typography>
      </Box>
{/* page */}
      <Box sx={{width: '400px', height: '25px', marginTop: '-22px', marginLeft: '330px', borderRadius: '12px'}}>
<Box sx={{width: '90px', height: '22px', marginTop: '-22px', marginLeft: '4px', borderRadius: '5px', padding: '0px, 8px, 0px, 8px'}}>
<Box  sx={{width: '300px'}}> <img width={'11px'} height={'11px'} src={img2} alt='' /> </Box>
   <Typography sx={{font: 'helvetica', fontWeight: 700, fontSize: '10px', lineHeight: '15px', marginTop:'-18px', marginLeft: '15px'}}> DASHBOARD</Typography>
</Box>
<Box sx={{width: '90px', height: '22px', marginTop: '-22px', marginLeft: '100px', borderRadius: '5px', padding: '0px, 8px, 0px, 8px'}}>
<Box  sx={{width: '300px'}}> <img width={'11px'} height={'11px'} src={img3} alt='' /> </Box>
<Typography sx={{font: 'helvetica', fontWeight: 700, fontSize: '10px', lineHeight: '15px', marginTop:'-18px', marginLeft: '15px'}}> PROFILE</Typography>
</Box>
<Box sx={{width: '90px', height: '22px', marginTop: '-22px', marginLeft: '180px', borderRadius: '5px', padding: '0px, 8px, 0px, 8px'}}>
<Box  sx={{width: '300px'}}> <img width={'11px'} height={'11px'} src={img4} alt='' /> </Box>
<Typography sx={{font: 'helvetica', fontWeight: 700, fontSize: '10px', lineHeight: '15px', marginTop:'-18px', marginLeft: '13px'}}> SIGN UP</Typography>
</Box>
<Box sx={{width: '90px', height: '22px', marginTop: '-22px', marginLeft: '250px', borderRadius: '5px', padding: '0px, 8px, 0px, 8px'}}>
<Box  sx={{width: '80px'}}> <img width={'11px'} height={'11px'} src={img5} alt='' /> </Box>
<Typography sx={{font: 'helvetica', fontWeight: 700, fontSize: '10px', lineHeight: '15px', marginTop:'-18px', marginLeft: '13px'}}> SIGN IN</Typography>
</Box>
{/* Button */}
<Button sx={{width: '150px', height: '30px', marginTop:'-45px', marginLeft: '450px', borderRadius: 34.50, background: 'linear-gradient(82deg, #313860 0%, #151928 100%)',}}>
    <Typography sx={{color: '#C4C4C4', width: '140px', height: '15px', font: 'helvetica', fontWeight:700, fontSize: '10px', textAlign: 'center'}}>Free download</Typography>
</Button>
      </Box>
    </Box>

    {/* input form */}
    <Box sx={{width: '353px', height: '400px', marginTop: '-550px', marginLeft: '300px', border: '1px solid gray'}}>
      <Grid sx={{width: '279px', height: '70px' }}>
        <Box sx={{width: '226px', height: '42px'}}>
          <Typography sx={{width: '226px', height: '42px', font: 'helvetica', fontWeight: 700, fontSize: '31px', lineHeight: '41px', textAlign:'center', color: '#4FD1C5'  }}>Welcome Back</Typography>
          <Typography sx={{width: '274px', height: '19px', font: 'helvetica', fontWeight: 700, fontSize: '13px', lineHeight: '19px', textAlign:'center', color: 'gray'  }}>Enter your email and password to sign in</Typography>
        </Box>
      </Grid>
      {/* email */}
      <Grid sx={{width: '350px', height: '75px', marginTop: '10px',  borderRadius: '15px'}}>
        <Typography sx={{width: '35.5px', height: '19.5px', marginTop: '10px', font: 'helvetica', fontWeight:700, fontSize: '14px', lineHeight: '19.6px', color: '#2D3748'}}>Email</Typography>
        <TextField sx={{color: '#A0AEC0', fontSize: 14, fontFamily: 'Helvetica', fontWeight:400}} fullWidth placeholder='Your email address ' />
        
      </Grid>
      {/* password  */}
      <Grid sx={{width: '350px', height: '75px', marginTop: '10px',  borderRadius: '15px'}}>
      <Typography sx={{width: '35.5px', height: '19.5px', marginTop: '10px', font: 'helvetica', fontWeight:700, fontSize: '14px', lineHeight: '19.6px', color: '#2D3748'}}>Password</Typography>
        <TextField sx={{color: '#A0AEC0', fontSize: 14, fontFamily: 'Helvetica', fontWeight:400}} fullWidth placeholder='Your password ' />
      </Grid>
      {/* Remember me */}
      <Grid sx={{color: '#2D3748', fontSize: 12, fontWeight: 400, fontFamily: 'Helvetica'}}>
                    <FormControlLabel  control={<Switch  defaultChecked />} label="Remember me" />
                  </Grid>
                  {/* submit */}
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 , background:'#4FD1C5', color: 'white', fontSize: 10, fontWeight: 700}}
                >
                  SIGN IN
                </Button>
                <Grid container justifyContent="center">
                  <Grid sx={{color: '#A0AEC0', fontSize:14, fontFamily: 'Helvetica', fontWeight:400, textAlign: 'center', lineHeight: 5}} item>
                  Don't have an account?
                    <Link sx={{color: '#4FD1C5', fontSize:14, fontFamily: 'Helvetica', fontWeight:700}} href="#" variant="body2">
                       Sign in
                    </Link>
                  </Grid>
                </Grid>
                </Box>

{/* footer  */}
<Grid sx={{width: '985.5px', height: '18px', marginTop: '180px', marginLeft: '200px'}}> 
<Box sx={{width: '372.5px', height: '18px', marginTop:'-40px'}}>
<Stack direction= {'row'} style={{width: '100%', height: '100%'}}>
              <span style={{color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}>@ 2021, Made with ❤️ by </span>
              <span style={{color: '#38B2AC', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '700', lineHeight: 8, wordWrap: 'break-word'}}> Creative Tim</span>
              <span style={{color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}> & </span>
              <span style={{color: '#38B2AC', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '700', lineHeight: 8, wordWrap: 'break-word'}}> Simmmple</span>
              <span style={{color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}> for a better web</span>
              </Stack>
</Box>
<Box sx={{width: '322.5px', height: '18px', marginTop:'-28px', marginLeft: '650px'}}>
<Stack  direction={'row'} style={{width: '100%', height: '100%', marginLeft: '30px', marginTop: '10px'}}>
              <Grid style={{width: '30%', height: '100%', color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}>Creative Tim</Grid>
              <Grid style={{width: '30%', height: '100%', color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}>Simmmple</Grid>
              <Grid style={{width: '30%', height: '100%', color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word'}}>Blog</Grid>
              <Grid style={{width: '30%', height: '100%', color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', lineHeight: 8, wordWrap: 'break-word', marginLeft: '-25px'}}>License</Grid>
              </Stack>
</Box>
</Grid>
              


    </>
    
  )
}

export default Background;

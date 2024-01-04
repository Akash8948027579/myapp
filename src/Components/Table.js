import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import CardContent from '@mui/material/CardContent';
import img1 from './Assets/logo-creative-tim.png';
import img2 from './Assets/default.png'
import img3 from './Assets/chart.png'
import img4 from './Assets/billing.png'
import img5 from './Assets/build.png'
import img6 from './Assets/circle.png'
import img7 from './Assets/per.png'
import img8 from './Assets/sgnin.png'
import img9 from './Assets/sharp.png'
import img10 from './Assets/search.png'
import img11 from './Assets/pers_gray.png'
import img12 from './Assets/sett.png'
import img13 from './Assets/noti.png'
import img14 from './Assets/Credits.png'
import img15 from './Assets/check.png'



const Table = () => {
  return (
    <Grid>
      {/* Sidebar */}
      <Box sx={{ width: '220px', height: '600px', marginTop: '23px', marginLeft: '10px', border: '1px solid gray' }}>
        <Box sx={{ width: '198px', height: '23px', marginTop: '10px', marginLeft: '5px' }}>
          <Box sx={{ width: '20px', height: '20px', paddingTop: '0px' }}> <img src={img1} /> </Box>
          <Typography sx={{ width: '198px', height: '21px', fontFamily: 'helvetica', fontWeight: 700, fontSize: '14px', paddingLeft: '25px', marginTop: '-15px' }}> PURITY UI DASHBOARD</Typography>
        </Box>
        {/* menu */}
        <Box sx={{ width: '215px', height: '280px', marginTop: '22px', marginLeft: '1px' }}>
          <Grid sx={{ width: '210px', height: '30px', marginTop: '0px', marginLeft: '1px', borderRadius: '12px', background: '#FFFFFF' }}>
            <Grid sx={{ width: '25px', height: '25px', border: '1px solid gray', borderRadius: '10px', background: '#4FD1C5', marginTop: '1px', marginLeft: '5px' }}>
              <Box sx={{ width: '20px', height: '20px', marginTop: '-3px', paddingLeft: '3px' }}><img src={img2} /></Box>
            </Grid>
            <Typography sx={{ width: '25px', height: '21px', marginLeft: '40px', marginTop: '-22px', font: 'helvetica', fontWeight: 700, fontSize: '12px', lineHeight: '21px' }} >Dashboard</Typography>
          </Grid>
          {/* table */}
          <Box sx={{ width: '100px', height: '30px', marginTop: '5px', marginLeft: '7px', borderRadius: '12px' }}>
            <Box sx={{ width: '25px', height: '25px', marginTop: '0px', marginLeft: '1px', borderRadius: '10px', marginTop: '1px' }} >
              <Box sx={{ width: '15px', height: '15px', paddingLeft: '3px', marginTop: '-2px' }}><img src={img3} /></Box>
              <Typography sx={{ color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: 700, width: '20x', paddingLeft: '30px', marginTop: '-10px' }}> Tables</Typography>
            </Box>
          </Box>
          {/* Billing */}
          <Box sx={{ width: '100px', height: '30px', marginTop: '5px', marginLeft: '7px', borderRadius: '12px', }}>
            <Box sx={{ width: '25px', height: '25px', marginTop: '0px', marginLeft: '1px', borderRadius: '10px', marginTop: '1px' }} >
              <Box sx={{ width: '15px', height: '15px', paddingLeft: '3px', marginTop: '-2px' }}><img src={img4} /></Box>
              <Typography sx={{ color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: 700, width: '20x', paddingLeft: '30px', marginTop: '-10px' }}> Billing</Typography>
            </Box>
          </Box>
          {/* RTL */}
          <Box sx={{ width: '100px', height: '30px', marginTop: '5px', marginLeft: '7px', borderRadius: '12px' }}>
            <Box sx={{ width: '25px', height: '25px', marginTop: '0px', marginLeft: '1px', borderRadius: '10px', marginTop: '1px' }} >
              <Box sx={{ width: '15px', height: '15px', paddingLeft: '3px', marginTop: '-2px' }}><img src={img5} /></Box>
              <Typography sx={{ color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: 700, width: '20x', paddingLeft: '30px', marginTop: '-10px' }}> RTL</Typography>
            </Box>
          </Box>
          <Typography sx={{ color: '#2D3748', fontSize: 12, fontFamily: 'Helvetica', fontWeight: 700, marginLeft: '7px', marginTop: '2px' }}>ACCOUNT PAGES</Typography>
          {/* PROFILE */}
          <Box sx={{ width: '100px', height: '30px', marginTop: '5px', marginLeft: '7px', borderRadius: '12px' }}>
            <Box sx={{ width: '25px', height: '25px', marginTop: '0px', marginLeft: '1px', borderRadius: '10px', marginTop: '1px' }} >
              <Box sx={{ width: '15px', height: '15px', paddingLeft: '3px', marginTop: '-2px' }}><img src={img7} /></Box>
              <Typography sx={{ color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: 700, width: '20x', paddingLeft: '30px', marginTop: '-10px' }}> Profile</Typography>
            </Box>
          </Box>
          {/* sign in  */}
          <Box sx={{ width: '100px', height: '30px', marginTop: '5px', marginLeft: '7px', borderRadius: '12px' }}>
            <Box sx={{ width: '25px', height: '25px', marginTop: '0px', marginLeft: '1px', borderRadius: '10px', marginTop: '1px' }} >
              <Box sx={{ width: '15px', height: '15px', marginLeft: '3px', marginTop: '-2px' }}><img src={img8} /></Box>
              <Typography sx={{ color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: 700, width: '100px', paddingLeft: '30px', marginTop: '-10px' }}> Sign In</Typography>
            </Box>
          </Box>
          {/* sign up  */}
          <Box sx={{ width: '120px', height: '30px', marginTop: '5px', marginLeft: '7px', borderRadius: '12px' }}>
            <Box sx={{ width: '25px', height: '25px', marginTop: '0px', marginLeft: '1px', borderRadius: '10px', marginTop: '1px' }} >
              <Grid sx={{ width: '15px', height: '15px', paddingLeft: '3px', marginTop: '-2px' }}><img src={img9} /></Grid>
              <Typography sx={{ color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: 700, width: '100px', paddingLeft: '30px', marginTop: '-10px' }}> Sign Up</Typography>
            </Box>
          </Box>
        </Box>
        {/* Need help */}
        <Box sx={{ width: '216px', height: '250px', marginTop: '4px', marginLeft: '1px' }}>
          <Box sx={{ width: '200px', height: '150px', paddingTop: '10px', paddingLeft: '6px', borderRadius: '10px', background: '#4FD1C5' }}>
            <Box sx={{ width: '30px', height: '30px', paddingTop: '0px', paddingLeft: '0px', borderRadius: '10px', background: 'white' }}>
              <Box sx={{ width: '24px', height: '24px', marginTop: '4px', marginLeft: '4px' }}><img src={img6} /></Box>
              <Typography sx={{ color: 'white', fontSize: 14, fontFamily: 'Helvetica', fontWeight: 700, marginTop: '7px', marginLeft: '5px' }}>Needhelp?</Typography>
              <Typography sx={{ color: 'white', fontSize: 12, fontFamily: 'Helvetica', fontWeight: 400, marginTop: '1px', marginLeft: '5px' }}>Pleasecheckourdocs</Typography>
              <Button sx={{ color: 'black', fontSize: 10, fontFamily: 'Helvetica', fontWeight: 700, width: '150px', marginTop: '1px', marginLeft: '14px', background: 'white', borderRadius: '10px' }}>DOCUMENTS</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Breadcrumb */}
      <Box sx={{ width: '1100px', height: '40px', marginTop: '-610px', marginLeft: '250.5px', borderRadius: '10px', border: '1px solid gray' }} >
        <Typography sx={{ width: '90px', height: '18px', paddingLeft: '2px' }}>
          <Typography sx={{ color: '#A0AEC0', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400' }}>Pages /</Typography>
          <Typography sx={{ color: 'black', fontSize: 12, fontFamily: 'Helvetica', fontWeight: '400', marginTop: '-18px', marginLeft: '46px' }}> Tables</Typography>
        </Typography>
        <Typography sx={{ width: '24px', height: '10px', color: '#2D3748', fontSize: 14, fontFamily: 'Helvetica', fontWeight: '700' }}> Tables</Typography>
        {/* Searchbar */}
        <Grid sx={{ width: '190px', height: '38px', borderRadius: '12px', border: '0.5px solid gray', marginLeft: '700px', marginTop: '-28px' }}>
          <Box sx={{ paddingLeft: '3px', paddingTop: '4px' }}><img width={'18px'} src={img10} /></Box>
          <Grid sx={{ marginLeft: '25px', marginTop: '-20px' }}><TextField placeholder='Type here...' /></Grid>
        </Grid>
        <Box sx={{ width: '160px', height: '20px', borderRadius: '2px', marginLeft: '900px', marginTop: '-32px' }}>
          <Box sx={{ marginTop: '-4px', }}><img src={img11} /></Box>
          <Typography sx={{ marginTop: '-19px', marginLeft: '13px', color: '#718096', fontSize: '12px', fontWeight: 700 }}>Sign in</Typography>
          <Box sx={{ marginTop: '-23px', marginLeft: '70px' }}><img src={img12} /></Box>
          <Box sx={{ marginTop: '-24px', marginLeft: '100px' }}><img src={img13} /></Box>
        </Box>
      </Box>

      {/* CardContent */}
      <CardContent sx={{ width: '1100px', height: '580px', marginTop: '22px', marginLeft: '250.5px', border: '1px solid gray' }} >
        {/* Author table  */}
        <Box sx={{ width: '1090px', height: '295px', marginTop: '-15px', marginLeft: '-10px' }}>
          <Typography sx={{ color: '#2D3748', fontSize: 14, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '2px', paddingTop: '2px' }} > Authors Table</Typography>
          <Grid sx={{ paddingLeft: '2px', paddingTop: '2px' }}>
            <Typography sx={{ color: '#A0AEC0', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '2px', marginTop: '-2px' }} > AUTHOR</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '280px', marginTop: '-16px' }} > FUNCTION</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '500px', marginTop: '-15px' }} > STATUS</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '700px', marginTop: '-14px' }} > EMPLOYED</Typography>
          </Grid>
          <hr />
          {/* Items */}
          <Box sx={{ width: '1090px', height: '41px', marginTop: '-15px', border: '1px solid #E2E8F0' }}>
            <Grid sx={{ width: '210px', height: '40px'}}>
              <Box sx={{borderRadius: '15px'}}><img style={{ borderRadius: '10px', width:'40px', height:'35px' }} src={img14}/></Box>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '60px', marginTop:'-35px' }}>Esthera Jackson</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '60px', marginTop:'-8px' }}>esthera@simmmple.com</Typography>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '279px', marginTop:'-35px' }}>Manager</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '278px', marginTop:'-8px' }}>Organization</Typography>
              <Button sx={{backgroundColor: '#48BB78', width:'65px', height: '20px', marginLeft: '490px', marginTop:'-65px', borderRadius: '8px' }}>
<Typography sx={{fontWeight: 700, fontSize: '10px', textAlign:'center', color:'white', fontFamily: 'Helvetica'}}>Online</Typography>
              </Button>
              <Typography sx={{fontWeight: 700, fontSize: '14px',  color:'#2D3748', marginLeft: '698px', marginTop:'-55px'}}>14/06/21</Typography>
              <Typography sx={{fontWeight: 700, fontSize: '12px',  color:'#718096', marginLeft: '900px', marginTop:'-20px'}}>Edit</Typography>
            </Grid>
          </Box>

          <Box sx={{ width: '1090px', height: '41px', marginTop: '-2px', border: '1px solid #E2E8F0' }}>
            <Grid sx={{ width: '210px', height: '40px', paddingTop: '2px'}}>
            <Box sx={{borderRadius: '15px'}}><img style={{ borderRadius: '10px', width:'40px', height:'35px' }} src={img14}/></Box>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '60px', marginTop:'-35px' }}>Alexa Liras</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '60px', marginTop:'-8px' }}>alexa@simmmple.com</Typography>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '279px', marginTop:'-35px' }}>Programmer</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '278px', marginTop:'-8px' }}>Developer</Typography>
              <Button sx={{backgroundColor: '#CBD5E0', width:'65px', height: '20px', marginLeft: '490px', marginTop:'-65px', borderRadius: '8px' }}>
<Typography sx={{fontWeight: 700, fontSize: '10px', textAlign:'center', color:'white', fontFamily: 'Helvetica'}}>Offline</Typography>
              </Button>
              <Typography sx={{fontWeight: 700, fontSize: '14px',  color:'#2D3748', marginLeft: '698px', marginTop:'-55px'}}>14/06/21</Typography>
              <Typography sx={{fontWeight: 700, fontSize: '12px',  color:'#718096', marginLeft: '900px', marginTop:'-20px'}}>Edit</Typography>
            </Grid>
            
          </Box>

          <Box sx={{ width: '1090px', height: '41px', marginTop: '-2px', border: '1px solid #E2E8F0' }}>
          <Grid sx={{ width: '210px', height: '40px', paddingTop: '2px' }}>
              <Box sx={{borderRadius: '15px'}}><img style={{ borderRadius: '10px', width:'40px', height:'35px' }} src={img14}/></Box>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '60px', marginTop:'-35px' }}>Laurent Michael</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '60px', marginTop:'-8px' }}>laurent@simmmple.com</Typography>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '279px', marginTop:'-35px' }}>Executive</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '278px', marginTop:'-8px' }}>Projects</Typography>
              <Button sx={{backgroundColor: '#48BB78', width:'65px', height: '20px', marginLeft: '490px', marginTop:'-65px', borderRadius: '8px' }}>
<Typography sx={{fontWeight: 700, fontSize: '10px', textAlign:'center', color:'white', fontFamily: 'Helvetica'}}>Online</Typography>
              </Button>
              <Typography sx={{fontWeight: 700, fontSize: '14px',  color:'#2D3748', marginLeft: '698px', marginTop:'-55px'}}>14/06/21</Typography>
              <Typography sx={{fontWeight: 700, fontSize: '12px',  color:'#718096', marginLeft: '900px', marginTop:'-20px'}}>Edit</Typography>
            </Grid>
          </Box>

          <Box sx={{ width: '1090px', height: '41px', marginTop: '-2px', border: '1px solid #E2E8F0' }}>
          <Grid sx={{ width: '210px', height: '40px', paddingTop: '2px'}}>
              <Box sx={{borderRadius: '15px'}}><img style={{ borderRadius: '10px', width:'40px', height:'35px' }} src={img14}/></Box>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '60px', marginTop:'-35px' }}>Freduardo Hill</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '60px', marginTop:'-8px' }}>freduardo@simmmple.com</Typography>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '279px', marginTop:'-35px' }}>Manager</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '278px', marginTop:'-8px' }}>Organization</Typography>
              <Button sx={{backgroundColor: '#48BB78', width:'65px', height: '20px', marginLeft: '490px', marginTop:'-65px', borderRadius: '8px' }}>
<Typography sx={{fontWeight: 700, fontSize: '10px', textAlign:'center', color:'white', fontFamily: 'Helvetica'}}>Online</Typography>
              </Button>
              <Typography sx={{fontWeight: 700, fontSize: '14px',  color:'#2D3748', marginLeft: '698px', marginTop:'-55px'}}>14/06/21</Typography>
              <Typography sx={{fontWeight: 700, fontSize: '12px',  color:'#718096', marginLeft: '900px', marginTop:'-20px'}}>Edit</Typography>
            </Grid>
          </Box>

          <Box sx={{ width: '1090px', height: '41px', marginTop: '-2px', border: '1px solid #E2E8F0' }}>
          <Grid sx={{ width: '210px', height: '40px', paddingTop: '2px' }}>
            <Box sx={{borderRadius: '15px'}}><img style={{ borderRadius: '10px', width:'40px', height:'35px' }} src={img14}/></Box>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '60px', marginTop:'-35px' }}>Daniel Thomas</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '60px', marginTop:'-8px' }}>daniel@simmmple.com</Typography>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '279px', marginTop:'-35px' }}>Programmer</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '278px', marginTop:'-8px' }}>Developer</Typography>
              <Button sx={{backgroundColor: '#CBD5E0', width:'65px', height: '20px', marginLeft: '490px', marginTop:'-65px', borderRadius: '8px' }}>
<Typography sx={{fontWeight: 700, fontSize: '10px', textAlign:'center', color:'white', fontFamily: 'Helvetica'}}>Offline</Typography>
              </Button>
              <Typography sx={{fontWeight: 700, fontSize: '14px',  color:'#2D3748', marginLeft: '698px', marginTop:'-55px'}}>14/06/21</Typography>
              <Typography sx={{fontWeight: 700, fontSize: '12px',  color:'#718096', marginLeft: '900px', marginTop:'-20px'}}>Edit</Typography>
            </Grid>
          </Box>

          <Box sx={{ width: '1090px', height: '41px', marginTop: '-41px', border: '1px solid #E2E8F0' }}></Box>
 <Grid sx={{ width: '210px', height: '40px', paddingTop: '2px'}}>
            <Box sx={{borderRadius: '15px'}}> <img src={img14} style={{ borderRadius: '10px', width:'40px', height:'35px' }} alt="" /></Box>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '60px', marginTop:'-32px' }}>Mark Wilson</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '60px', marginTop:'-8px' }}>mark@simmmple.com</Typography>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '279px', marginTop:'-35px' }}>Designer</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '278px', marginTop:'-8px', width:'100px' }}>UI/UX Design</Typography>
              <Button sx={{backgroundColor: '#CBD5E0', width:'65px', height: '20px', marginLeft: '490px', marginTop:'-65px', borderRadius: '8px' }}>
<Typography sx={{fontWeight: 700, fontSize: '10px', textAlign:'center', color:'white', fontFamily: 'Helvetica'}}>Offline</Typography>
              </Button>
              <Typography sx={{fontWeight: 700, fontSize: '14px',  color:'#2D3748', marginLeft: '698px', marginTop:'-55px'}}>14/06/21</Typography>
              <Typography sx={{fontWeight: 700, fontSize: '12px',  color:'#718096', marginLeft: '900px', marginTop:'-20px'}}>Edit</Typography>
            </Grid>
        </Box>

        {/* Projects  */}
        <Box sx={{ width: '1090px', height: '240px', marginTop: '10px', marginLeft: '-10px', border: '1px solid gray' }}>
          <Box sx={{width: '141px', height: '50.5px', marginTop: '3px', marginLeft: '3px'}}>
          <Typography sx={{width: '41px', height: '25px', paddingTop: '3px', paddingLeft: '3px', fontWeight: 700, fontFamily:'Helvetica', fontSize: '14px'}}>Projects</Typography> </Box>
          <img src={img15} alt='' style={{ width:'15px', height:'15px', marginTop: '-65px', marginLeft:'4px' }}/>
          <Typography sx={{color: '#A0AEC0',fontSize: 14,fontFamily: 'Helvetica',fontWeight: 700, marginTop: '-52px', marginLeft: '23px'}}>30 done</Typography>
          <Typography sx={{color: '#A0AEC0',fontSize: 14,fontFamily: 'Helvetica',fontWeight: 400, marginTop: '-21px', marginLeft: '81px'}}>this month</Typography>
          {/* Items  */}
          <Grid sx={{ paddingLeft: '2px', paddingTop: '2px' }}>
            <Typography sx={{ color: '#A0AEC0', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '2px', marginTop: '-2px' }} > COMPANIES</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '280px', marginTop: '-16px' }} > BUDGET</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '500px', marginTop: '-15px' }} > STATUS</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', paddingLeft: '700px', marginTop: '-14px' }} > COMPLETION</Typography>
          </Grid>
<hr/>
<Box sx={{ width: '1090px', height: '41px', marginTop: '-15px', border: '1px solid #E2E8F0' }}>
            <Grid sx={{ width: '210px', height: '40px'}}>
              <Box sx={{borderRadius: '15px'}}><img style={{ borderRadius: '10px', width:'40px', height:'35px' }} src={img14}/></Box>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '60px', marginTop:'-35px' }}>Esthera Jackson</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '60px', marginTop:'-8px' }}>esthera@simmmple.com</Typography>
              <Typography sx={{color: '#2D3748',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '700', marginLeft: '279px', marginTop:'-35px' }}>Manager</Typography>
              <Typography sx={{color: '#718096',fontSize: 14,fontFamily: 'Helvetica', fontWeight: '400', marginLeft: '278px', marginTop:'-8px' }}>Organization</Typography>
              <Button sx={{backgroundColor: '#48BB78', width:'65px', height: '20px', marginLeft: '490px', marginTop:'-65px', borderRadius: '8px' }}>
<Typography sx={{fontWeight: 700, fontSize: '10px', textAlign:'center', color:'white', fontFamily: 'Helvetica'}}>Online</Typography>
              </Button>
              <Typography sx={{fontWeight: 700, fontSize: '14px',  color:'#2D3748', marginLeft: '698px', marginTop:'-55px'}}>14/06/21</Typography>
              <Typography sx={{fontWeight: 700, fontSize: '12px',  color:'#718096', marginLeft: '900px', marginTop:'-20px'}}>Edit</Typography>
            </Grid>
          </Box>
        </Box>
      </CardContent>
    </Grid>
  )
}

export default Table

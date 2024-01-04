import React from 'react'
import { Avatar, Box, Button, Grid, Input, TextField, Typography } from '@mui/material'
import img from './Assets/Icon1.png'
import img1 from './Assets/docIcon.png'
import img2 from './Assets/Icon-3.png'
import img3 from './Assets/Icon-4.png'
import img4 from './Assets/UncolPen.png'
import img5 from './Assets/ColWallet.png'
import img6 from './Assets/Icon-7.png'
import img7 from './Assets/Sliders.png'
import img8 from './Assets/truck.png'
import img9 from './Assets/Frame 1171275561.png'
import img10 from './Assets/ic_check.png'
import img11 from './Assets/ic.png'
import img12 from './Assets/vertIcon.png'
import img13 from './Assets/circle1.png'
import img14 from './Assets/circle2.png'
import img15 from './Assets/Ellipse 11.png'
import img16 from './Assets/circle3.png'
import img17 from './Assets/circle4.png'
import img18 from './Assets/circle5.png'
import img19 from './Assets/circle6.png'
import img20 from './Assets/Icon11.png'
import img21 from './Assets/Icon12.png'
import img22 from './Assets/Icon13.png'
import img23 from './Assets/Vector 7.png'
import img24 from './Assets/arrow.png'
import img25 from './Assets/search.png'
import img26 from './Assets/placeholder.png'
import { TextFieldsOutlined } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ResponsiveDrawer from './ResponsiveDrawer'
import ResponsiveDrawer2 from './ResponsiveDrawer2'

const Bpsbooking1 = () => {
  const theme = useTheme();
  
  return (
    //--------------------------------------------------- Main page------------------------------------------------------------------------ 
    <Box sx={{ backgroundColor: '#F3F2F7'}}>

      <ResponsiveDrawer2/>
      <Box sx={{ width: {sm:'1050px', xs:'300px'}, height: '40px', marginLeft: {sm:'270px', xs:'50px'}, marginTop: {sm:'-15px', xs:'-15px'}, display:{xs:'none', sm:'block'} }}>
        <Typography sx={{ color: '#464255', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', marginTop: '0px' }}>Manage Booking</Typography>
        <Button sx={{[theme.breakpoints.up('xs')]: { width: '172px', height: '40px', borderRadius: '20px', background: '#0155A5', marginLeft: {sm:'780px', xs:'600px'}, marginTop: '-52px'  }, 
[theme.breakpoints.up('sm')]: {width: '172px', height: '40px', borderRadius: '20px', background: '#0155A5', marginLeft: '860px', marginTop: '-48px'  },
[theme.breakpoints.up('md')]: { width: '172px', height: '40px', borderRadius: '20px', background: '#0155A5', marginLeft: '860px', marginTop: '-48px' },  }}>
          <img src={img7} alt='' style={{ marginLeft: '-10px' }} />
          <Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'white', paddingLeft: '4px' }}> Apply Filter</Typography>
        </Button>
      </Box>
      <Box sx={{ [theme.breakpoints.up('xs')]: { width: '1050px', height: '500px', display: 'flex', flexDirection: 'column', gap: '30px', marginLeft: '150px', marginTop: '5px',paddingLeft:'10px', borderRadius: '10px'}, 
[theme.breakpoints.up('sm')]: {width: '1050px', height: '100px', display: 'flex', flexDirection: 'row', gap: '130px', marginLeft: '270px', marginTop: '5px', borderRadius: '10px' },
[theme.breakpoints.up('md')]: { width: '1050px', height: '100px', display: 'flex', flexDirection: 'row', gap: '130px', marginLeft: '270px', marginTop: '5px', borderRadius: '10px'},  }}>
        <Box sx={{ width: {md:'280px',sm:'300px', xs:'500px'}, height: '100px', border: '1px solid #F3F2F7', background: 'white', borderRadius: '10px', marginLeft: '0px', marginTop: '0px' }}>
          <img src={img8} alt='' style={{ width:'150px', height: '76px', marginTop: '10px', marginLeft: '-10px' }} />
          <Typography sx={{ color: 'black', fontSize: '30px', fontFamily: 'Inter', fontWeight: 700, marginTop: '-85px', marginLeft: '150px' }}>128</Typography>
          <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, marginTop: '-5px', marginLeft: '150px' }}>Vehicle Available</Typography>
          <Typography sx={{ marginTop: '0px', marginLeft: '150px', fontWeight: 400, color: 'black', fontFamily: 'Inter', fontSize: '10px' }}>Total: 365</Typography>
        </Box>
        <Box sx={{ width:{md:'240px', sm:'260px', xs:'500px'}, height: '100px', border: '1px solid #F3F2F7', background: 'white', borderRadius: '10px', marginLeft: '0px', marginTop: '0px' }}>
          <img src={img9} alt='' style={{ width: '110px', height: '76px', marginTop: '10px', marginLeft: '-35px' }} />
          <Typography sx={{ color: 'black', fontSize: '30px', fontFamily: 'Inter', fontWeight: 700, marginTop: '-85px', marginLeft: '100px' }}>107</Typography>
          <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, marginTop: '-5px', marginLeft: '100px' }}>Drivers Available</Typography>
          <Typography sx={{ marginTop: '0px', marginLeft: '100px', fontWeight: 400, color: 'black', fontFamily: 'Inter', fontSize: '10px' }}>Total: 352</Typography>
        </Box>
        <Box sx={{ width:{md:'250px', sm:'270px', xs:'500px'}, height: '100px', border: '1px solid #F3F2F7', background: 'white', borderRadius: '10px', marginLeft: '0px', marginTop: '0px' }}>
          <img src={img8} alt='' style={{ width: '150px', height: '76px', marginTop: '10px', marginLeft: '-10px' }} />
          <Typography sx={{ color: 'black', fontSize: '30px', fontFamily: 'Inter', fontWeight: 700, marginTop: '-85px', marginLeft: '150px' }}>128</Typography>
          <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, marginTop: '-5px', marginLeft: '150px' }}>Vehicle Available</Typography>
          <Typography sx={{ marginTop: '0px', marginLeft: '150px', fontWeight: 400, color: 'black', fontFamily: 'Inter', fontSize: '10px' }}>Total: 365</Typography>
        </Box>
      </Box>

      <Grid sx={{ [theme.breakpoints.up('xs')]: { width: '500px', height: '1000px', display: 'flex', flexDirection: 'column', gap: '40px', marginLeft: '150px', marginTop: '-85px', borderRadius: '10px'}, 
[theme.breakpoints.up('sm')]: {width: '1050px', height: '200px', display: 'flex', flexDirection: 'row', gap: '40px', marginLeft: '270px', marginTop: '15px', borderRadius: '10px' },
[theme.breakpoints.up('md')]: { width: '1050px', height: '200px', display: 'flex', flexDirection: 'row', gap: '40px', marginLeft: '270px', marginTop: '15px', borderRadius: '10px'},  }}>
        <Grid sx={{ [theme.breakpoints.up('xs')]: { width: '500px', height: '200px', display: 'flex', flexDirection: 'column', border: '1px solid #F3F2F7', marginLeft: '0px', paddingLeft: '15px', marginTop: '0px', borderRadius: '10px', background: 'white'}, 
[theme.breakpoints.up('sm')]: {width: '500px', height: '200px', display: 'flex', flexDirection: 'row', border: '1px solid #F3F2F7', marginLeft: '0px', paddingLeft: '15px', marginTop: '0px', borderRadius: '10px', background: 'white' },
[theme.breakpoints.up('md')]: { width: '500px', height: '200px', display: 'flex', flexDirection: 'row', border: '1px solid #F3F2F7', marginLeft: '0px', paddingLeft: '15px', marginTop: '0px', borderRadius: '10px', background: 'white'},   }}>
          <Box sx={{ width: '450px', height: '30px', marginLeft: '5px', marginTop: '5px' }}>
            <Typography sx={{ color: '#464255', fontSize: '16px', fontFamily: 'Barlow', fontWeight: 600 }}>Pie Chart</Typography>
            <img src={img10} alt='' style={{ width: '20px', height: '20px', marginLeft: '200px', marginTop: '-55px' }} />
            <Typography sx={{ color: '#464255', fontSize: '16px', fontFamily: 'Inter', fontWeight: 600, marginLeft: '230px', marginTop: '-50px' }}>Chart</Typography>
            <img src={img11} alt='' style={{ width: '20px', height: '20px', marginLeft: '300px', marginTop: '-50px' }} />
            <Typography sx={{ color: '#464255', fontSize: '16px', fontFamily: 'Inter', fontWeight: 600, marginLeft: '330px', marginTop: '-47px' }}>Show Value</Typography>
            <img src={img12} alt='' style={{ width: '15px', height: '15px', marginLeft: '430px', marginTop: '-50px' }} />

            {/* -----------------------------------------------------------Chart------------------------------------------------------------  */}
            <Box sx={{ width: '480px', height: '150px', marginLeft: '0px', marginTop: '-8px', display: 'flex', flexDirection: 'row', gap: '5px' }}>
              <Box sx={{ width: '150px', height: '150px', marginLeft: '0px', marginTop: '-8px' }}>
                <img src={img13} alt=' ' style={{ width: '120px', height: '120px', marginLeft: '5px' }} />
                <img src={img14} alt='' style={{ width: '120px', height: '120px', marginLeft: '5px', marginTop: '-150px' }} />
                <img src={img15} alt='' style={{ width: '100px', height: '100px', marginLeft: '15px', marginTop: '-175px' }} />
                <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '15px', color: 'black', marginTop: '-120px', marginLeft: '53px' }}>81%</Typography>
                <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, width: '150px', fontSize: '15px', color: 'black', marginTop: '50px', marginLeft: '10px' }}>Total Bookings</Typography>

              </Box>
              <Box sx={{ width: '150px', height: '150px', marginLeft: '0px', marginTop: '-8px' }}>
                <img src={img16} alt='' style={{ width: '120px', height: '120px', marginLeft: '5px' }} />
                <img src={img17} alt='' style={{ width: '60px', height: '60px', marginLeft: '65px', marginTop: '-210px' }} />
                <img src={img15} alt='' style={{ width: '100px', height: '100px', marginLeft: '15px', marginTop: '-175px' }} />
                <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '15px', color: 'black', marginTop: '-120px', marginLeft: '53px' }}>22%</Typography>
                <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, width: '150px', fontSize: '15px', color: 'black', marginTop: '50px', marginLeft: '10px' }}>Customer Growth</Typography>
              </Box>
              <Box sx={{ width: '150px', height: '150px', marginLeft: '0px', marginTop: '-8px' }}>
                <img src={img18} alt='' style={{ width: '120px', height: '120px', marginLeft: '5px' }} />
                <img src={img19} alt='' style={{ width: '110px', height: '120px', marginLeft: '20px', marginTop: '-150px' }} />
                <img src={img15} alt='' style={{ width: '100px', height: '100px', marginLeft: '15px', marginTop: '-175px' }} />
                <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '15px', color: 'black', marginTop: '-120px', marginLeft: '53px' }}>62%</Typography>
                <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, width: '150px', fontSize: '15px', color: 'black', marginTop: '50px', marginLeft: '10px' }}>Total Revenue</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid sx={{ width:{md:'480px',sm:'480px', xs:'500px'}, height: '200px', display: 'flex', flexDirection: 'row', border: '1px solid #F3F2F7', marginLeft: '10px', marginTop: '0px', paddingLeft: '10px', borderRadius: '10px', background: 'white' }}>
          <Typography sx={{ width: '130px', height: '20px', fontFamily: 'Barlow', fontWeight: 700, fontSize: '18px', padding: '10px' }}>Chart Order</Typography>
          <Typography sx={{ width: '300px', height: '15px', fontFamily: 'Barlow', fontWeight: 100, fontSize: '14px', padding: '10px', lineHeight: '10px', marginLeft: '-128px', marginTop: '35px' }}>Lorem ipsum dolor sit amet, consectetur adip</Typography>
          <Button sx={{ border: '1px solid #2D9CDB', width: '150px', height: '40px', borderRadius: '15px', marginTop: '15px', gap: '5px' }}>
            <img src={img22} alt='' style={{ marginLeft: '0px' }} />
            <Typography sx={{ color: '#2D9CDB', fontSize: '14px', fontFamily: 'Cairo', fontWeight: 700 }}>Save Report</Typography>
          </Button>

          {/* -------------------------------------------------------X-Info-----------------------------------------------------------------  */}
          <Grid sx={{ width: '440px', height: '100px', marginTop: '70px', marginLeft: '-440px' }}>
            <img src={img23} alt='' style={{ width: '420px', marginLeft: '15px', line: '2px solid blue' }} />
          </Grid>
          <Grid sx={{ width: '460px', height: '30px', marginTop: '160px', marginLeft: '-430px', display: 'flex', flexDirection: 'row', gap: '15px' }}>
            <Typography sx={{ color: 'black', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 400, }}>Sunday</Typography>
            <Typography sx={{ color: 'black', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 400, }}>Monday</Typography>
            <Typography sx={{ color: 'black', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 400, }}>Tuesday</Typography>
            <Typography sx={{ color: 'black', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 400, }}>Wednesday</Typography>
            <Typography sx={{ color: 'black', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 400, }}>Thursday</Typography>
            <Typography sx={{ color: 'black', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 400, }}>Friday</Typography>
            <Typography sx={{ color: 'black', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 400, }}>Saturday</Typography>
          </Grid>
          <Box sx={{ width: '100px', height: '40px', border: '1px solid #F3F2F7', marginLeft: '-300px', marginTop: '60px', borderRadius: '10px' }}>
            <Typography sx={{ color: '#464255', fontSize: '16px', fontFamily: 'Cairo', fontWeight: 700, paddingLeft: '8px' }}>456</Typography>
            <Typography sx={{ color: '#464255', fontSize: '15px', fontFamily: 'Cairo', fontWeight: 600, marginLeft: '28px', marginTop: '-23px', paddingLeft: '7px' }}>Order</Typography>
            <Typography sx={{ color: '#B9BBBD', fontSize: '14px', width: '150px', fontFamily: 'Barlow', fontWeight: 400, marginLeft: '0px', marginTop: '-2px', paddingLeft: '8px' }}>Oct 18th, 2020</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ [theme.breakpoints.up('xs')]: { width: '500px', height: '1000px', marginLeft: '150px', marginTop: '-545px', display: 'flex', flexDirection: 'column', gap: '30px' }, 
[theme.breakpoints.up('sm')]: {width: '1050px', height: '220px', marginLeft: '270px', marginTop: '5px', display: 'flex', flexDirection: 'row', gap: '30px' },
[theme.breakpoints.up('md')]: { width: '1050px', height: '220px', marginLeft: '270px', marginTop: '5px', display: 'flex', flexDirection: 'row', gap: '30px' }, }}>
        <Box sx={{ width: '600px', height: '220px', border: '1px solid #F3F2F7', background: 'white', borderRadius: '10px', paddingLeft: '15px' }}>
          <Typography sx={{ color: '#464255', fontSize: '18px', fontFamily: 'Barlow', fontWeight: 700, borderRadius: '15px', padding: '10px' }}>Total Revenue</Typography>

          {/*---------------------------------------------------------- 2021 // 2020----------------------------------------------------- */}
          <Box sx={{ width: '150px', height: '30px', marginLeft: '432px', marginTop: '-25px', display: 'flex', flexDirection: 'row', gap: '5px' }}>
            <Grid sx={{ width: '12px', height: '12px', border: '1px solid #A3A3A3', borderRadius: '20px', background: 'blue' }} />
            <Typography sx={{ color: '#A3A3A3', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 500, marginTop: '-4px' }}>2020</Typography>
            <Grid sx={{ width: '12px', height: '12px', border: '1px solid #A3A3A3', borderRadius: '20px', background: 'red' }} />
            <Typography sx={{ color: '#A3A3A3', fontSize: '14px', fontFamily: 'Barlow', fontWeight: 500, marginTop: '-4px' }}>2021</Typography>
          </Box>

          <Box sx={{ width: '34px', height: '160px', display: 'flex', flexDirection: 'column', marginTop: '-5px', marginLeft: '15px', gap: '15px' }}>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>$40k</Typography>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>$30k</Typography>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>$20k</Typography>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>$10k</Typography>
          </Box>

          <Box sx={{ width: '480px', height: '130px', marginTop: '-160px', marginLeft: '65px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px', border: '1px dotted blue' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px', border: '1px dotted red' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '1px', height: '130px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
          </Box>
          <Box sx={{ width: '480px', height: '30px', marginTop: '2px', marginLeft: '62px', display: 'flex', flexDirection: 'row', gap: '30px' }}>
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '3px' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px' }} />
            <Grid sx={{ width: '8px', height: '8px', borderRadius: '20px', marginLeft: '4px', background: 'blue' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px', background: 'red' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px' }} />
            <Grid sx={{ width: '8px', height: '8px', border: '1px solid #A3A3A3', borderRadius: '20px', marginLeft: '4px' }} />
          </Box>
          <Box sx={{ width: '480px', height: '30px', marginTop: '-5px', marginLeft: '60px', display: 'flex', flexDirection: 'row', gap: '18px' }}>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Jan</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Feb</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Mar</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Apr</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>May</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Jun</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Jul</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Aug</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Sep</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Oct</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Nov</Typography>
            <Typography sx={{ color: '#A3A3A3', fontSize: '15px', fontFamily: 'Barlow', fontWeight: 500 }}>Dec</Typography>
          </Box>
        </Box>
        {/* ----------------------------------------------------------Customer Map-----------------------------------------------------------  */}
        <Box sx={{ width:{md:'400px', sm:'400px', xs:'500px'}, height: '220px', border: '1px solid #F3F2F7', background: 'white', borderRadius: '12px', paddingLeft: '15px' }}>
          <Typography sx={{ color: '#464255', fontSize: '18px', fontFamily: 'Barlow', fontWeight: 700, borderRadius: '15px', padding: '10px' }}>Customer Map</Typography>
          <Button sx={{ width: '100px', height: '30px', border: '1px solid gray', borderRadius: '12px', marginLeft: '230px', marginTop: '-65px', gap: '5px' }}>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '12px', color: 'black' }}>Weekly</Typography>
            <img src={img24} alt='' />
          </Button>
          <img src={img12} alt='' style={{ width: '15px', height: '15px', marginLeft: '5px', marginTop: '-65px' }} />
          <Box sx={{ width: '34px', height: '160px', display: 'flex', flexDirection: 'column', marginTop: '-5px', marginLeft: '15px', gap: '5px' }}>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>80</Typography>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>60</Typography>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>40</Typography>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>20</Typography>
            <Typography sx={{ font: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}>0</Typography>
          </Box>
          <Box sx={{ width: '300px', height: '0px', marginTop: '-150px', marginLeft: '62px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <Grid sx={{ width: '300px', height: '1px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '300px', height: '1px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '300px', height: '1px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '300px', height: '1px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
            <Grid sx={{ width: '300px', height: '1px', border: '1px solid #F3F2F7', borderRadius: '20px' }} />
          </Box>

          <Box sx={{ width: '300px', height: '0px', marginTop: '10px', marginLeft: '62px', display: 'flex', flexDirection: 'row', gap: '35px' }}>
            <Grid sx={{ width: '10px', height: '80px', background: 'red', marginTop: '18px' }} />
            <Grid sx={{ width: '10px', height: '110px', background: 'yellow', marginTop: '-10px' }} />
            <Grid sx={{ width: '10px', height: '60px', background: 'red', marginTop: '40px' }} />
            <Grid sx={{ width: '10px', height: '100px', background: 'yellow' }} />
            <Grid sx={{ width: '10px', height: '80px', background: 'red', marginTop: '18px' }} />
            <Grid sx={{ width: '10px', height: '40px', background: 'yellow', marginTop: '60px' }} />
            <Grid sx={{ width: '10px', height: '80px', background: 'red', marginTop: '18px' }} />
          </Box>

          <Box sx={{ width: '300px', height: '30px', marginTop: '110px', marginLeft: '62px', display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <Typography sx={{ fontFamily: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}> Sun</Typography>
            <Typography sx={{ fontFamily: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}> Sun</Typography>
            <Typography sx={{ fontFamily: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}> Sun</Typography>
            <Typography sx={{ fontFamily: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}> Sun</Typography>
            <Typography sx={{ fontFamily: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}> Sun</Typography>
            <Typography sx={{ fontFamily: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}> Sun</Typography>
            <Typography sx={{ fontFamily: 'Barlow', fontWeight: 500, fontSize: '15px', color: '#A3A3A3' }}> Sun</Typography>
          </Box>
        </Box>
      </Box>
      

    </Box>
  )
}

export default Bpsbooking1;

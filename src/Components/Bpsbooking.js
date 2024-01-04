import React from 'react'
import { Box, Button, Grid, Input, TextField, Typography } from '@mui/material'
import img from './Assets/Icon1.png'
import img1 from './Assets/Icon2.png'
import img2 from './Assets/Icon-3.png'
import img3 from './Assets/Icon-4.png'
import img4 from './Assets/Icon-5.png'
import img5 from './Assets/Icon-6.png'
import img6 from './Assets/Icon-7.png'
import img7 from './Assets/Sliders.png'
import img8 from './Assets/Icon_Order.png'
import img9 from './Assets/Layer 2.png'
import img10 from './Assets/icon Delivered.png'
import img11 from './Assets/Icon8.png'
import img12 from './Assets/Icon9.png'
import img13 from './Assets/icon10.png'
import img14 from './Assets/Eye.png'
import img15 from './Assets/Checked Box.png'
import img16 from './Assets/Trash.png'
import img17 from './Assets/Icon11.png'
import img18 from './Assets/Icon12.png'
import img19 from './Assets/search.png'
import { useTheme } from '@mui/material/styles';
import { TextFieldsOutlined } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ResponsiveDrawer1 from './ResponsiveDrawer1'

const Bpsbooking = () => {
  const theme = useTheme();
  return (
    <Grid sx={{ background: '#F3F2F7' }}>
      
      <ResponsiveDrawer1/>

      <Box sx={{ [theme.breakpoints.up('xs')]: {width: '1050px', height: '40px', marginLeft: '30px', marginTop: '5px' }, 
[theme.breakpoints.up('sm')]: { width: '1050px', height: '40px', marginLeft: '350px', marginTop: '5px'},
[theme.breakpoints.up('md')]: { width: '1050px', height: '40px', marginLeft: '280px', marginTop: '5px' }, }}>
        <Typography sx={{ color: '#464255', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', marginTop: '5px' }}>Manage Booking</Typography>
        <Button sx={{ width: '172px', height: '40px', borderRadius: '20px', background: '#0155A5', marginLeft: '850px', marginTop: '-48px' }}>
          <img src={img7} style={{ marginLeft: '-10px' }} />
          <Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'white', paddingLeft: '4px' }}> Apply Filter</Typography>
        </Button>
      </Box>
      

      {/* Main content */}
      <Box sx={{ [theme.breakpoints.up('xs')]: { width: '1050px', height: '500px', marginLeft: '25px', marginTop: '8px'}, 
[theme.breakpoints.up('sm')]: { width: '1050px', height: '500px', marginLeft: '270px', marginTop: '8px'},
[theme.breakpoints.up('md')]: { width: '1050px', height: '500px', marginLeft: '270px', marginTop: '8px' }, }}>
        <Box sx={{[theme.breakpoints.up('xs')]: { width: '1050px', height: '100px', display: 'flex', flexDirection: 'row', gap: '15px', borderRadius: '10px' }, 
[theme.breakpoints.up('sm')]: {width: '1050px', height: '100px', display: 'flex', flexDirection: 'row', gap: '15px', borderRadius: '10px' },
[theme.breakpoints.up('md')]: { width: '1050px', height: '100px', display: 'flex', flexDirection: 'row', gap: '15px', borderRadius: '10px'  },  }}>
          <Box sx={{ [theme.breakpoints.up('xs')]: { width: '250px', height: '100px', border: '1px solid #F3F2F7', background: '#0155A5', borderRadius: '10px'}, 
[theme.breakpoints.up('sm')]: {width: '250px', height: '100px', border: '1px solid #F3F2F7', background: '#0155A5', borderRadius: '10px' },
[theme.breakpoints.up('md')]: { width: '250px', height: '100px', border: '1px solid #F3F2F7', background: '#0155A5', borderRadius: '10px' },  }}>
            <img src={img8} style={{ width: '74px', height: '76px', marginTop: '10px', marginLeft: '15px' }} />
            <Typography sx={{ color: 'white', fontSize: '30px', fontFamily: 'Inter', fontWeight: 700, marginTop: '-85px', marginLeft: '120px' }}>75</Typography>
            <Typography sx={{ color: 'white', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, marginTop: '-5px', marginLeft: '120px' }}>Booking Requests</Typography>
            <Box sx={{ width: '15px', height: '15px', background: '#D9E6F2', borderRadius: '15px', marginTop: '0px', marginLeft: '120px' }}>
              <img src={img9} style={{ marginTop: '-12px', marginLeft: '5px' }} />
            </Box>
            <Typography sx={{ marginTop: '-15px', marginLeft: '140px', fontWeight: 400, color: 'white', fontFamily: 'Inter', fontSize: '10px' }}>4% (30 days)</Typography>
          </Box>
          <Box sx={{ width: '250px', height: '100px', border: '1px solid #F3F2F7', background: 'white', borderRadius: '10px' }}>
            <img src={img10} style={{ width: '74px', height: '76px', marginTop: '10px', marginLeft: '15px' }} />
            <Typography sx={{ color: '#464255', fontSize: '30px', fontFamily: 'Inter', fontWeight: 700, marginTop: '-85px', marginLeft: '120px' }}>357</Typography>
            <Typography sx={{ color: '#464255', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, marginTop: '-5px', marginLeft: '120px' }}>Acitve Delieveries</Typography>
            <Box sx={{ width: '15px', height: '15px', background: '#D9E6F2', borderRadius: '15px', marginTop: '0px', marginLeft: '120px' }}>
              <img src={img9} style={{ marginTop: '-12px', marginLeft: '5px' }} />
            </Box>
            <Typography sx={{ marginTop: '-15px', marginLeft: '140px', fontWeight: 400, color: '#464255', fontFamily: 'Inter', fontSize: '10px' }}>4% (30 days)</Typography>
          </Box>

          <Box sx={{ width: '250px', height: '100px', border: '1px solid #F3F2F7', background: 'white', borderRadius: '10px' }}>
            <img src={img11} style={{ width: '74px', height: '76px', marginTop: '10px', marginLeft: '15px' }} />
            <Typography sx={{ color: '#464255', fontSize: '30px', fontFamily: 'Inter', fontWeight: 700, marginTop: '-85px', marginLeft: '120px' }}>65</Typography>
            <Typography sx={{ color: '#464255', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, marginTop: '-5px', marginLeft: '120px' }}>Total Canceled</Typography>
            <Box sx={{ width: '15px', height: '15px', background: '#D9E6F2', borderRadius: '15px', marginTop: '0px', marginLeft: '120px' }}>
              <img src={img12} style={{ marginTop: '-12px', marginLeft: '5px' }} />
            </Box>
            <Typography sx={{ marginTop: '-15px', marginLeft: '140px', fontWeight: 400, color: '#464255', fontFamily: 'Inter', fontSize: '10px' }}>25% (30 days)</Typography></Box>

          <Box sx={{ width: '250px', height: '100px', border: '1px solid #F3F2F7', background: 'white', borderRadius: '10px' }}>
            <img src={img13} style={{ width: '74px', height: '76px', marginTop: '10px', marginLeft: '15px' }} />
            <Typography sx={{ color: '#464255', fontSize: '27px', fontFamily: 'Inter', fontWeight: 700, marginTop: '-80px', marginLeft: '120px' }}>Rs 12800</Typography>
            <Typography sx={{ color: '#464255', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, marginTop: '-5px', marginLeft: '120px' }}>Total Revenues</Typography>
            <Box sx={{ width: '15px', height: '15px', background: '#D9E6F2', borderRadius: '15px', marginTop: '0px', marginLeft: '120px' }}>
              <img src={img12} style={{ marginTop: '-12px', marginLeft: '5px' }} />
            </Box>
            <Typography sx={{ marginTop: '-15px', marginLeft: '140px', fontWeight: 400, color: '#464255', fontFamily: 'Inter', fontSize: '10px' }}>25% (30 days)</Typography></Box>
        </Box>
        <Box sx={{ width: '1050px', height: '40px', border: '1px solid #F3F2F7', background: '#0155A5', gap: '125px', display: 'flex', flexDirection: 'row', paddingTop: '5px', marginTop: '5px', paddingLeft: '5px' }}>
          <Typography sx={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700' }}>Date</Typography>
          <Typography sx={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700' }}>Booking ID</Typography>
          <Typography sx={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700' }}>Pick up</Typography>
          <Typography sx={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700' }}>Drop</Typography>
          <Typography sx={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700' }}>Contact</Typography>
        </Box>
        <Box sx={{ width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px', background: 'white' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
        <Box sx={{ background: 'white', width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
        <Box sx={{ background: 'white', width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
        <Box sx={{ background: 'white', width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
        <Box sx={{ background: 'white', width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
        <Box sx={{ background: 'white', width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
        <Box sx={{ background: 'white', width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
        <Box sx={{ background: 'white', width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
        <Box sx={{ background: 'white', width: '1050px', height: '40px', border: '0.5px solid #F3F2F7', gap: '85px', display: 'flex', flexDirection: 'row', paddingTop: '7px', paddingLeft: '5px', marginTop: '2px' }}>
          <Typography sx={{ color: '#828282', fontSize: 11, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2 }}>23/08/2023</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '21px' }}>#70178KT</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '85px' }}>332, Kucha Ghasi Ram</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-50px' }}>to</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-45px' }}>3rd-Floor Bhavani Complex</Typography>
          <Typography sx={{ color: '#828282', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, marginLeft: '-48px' }}>7017866149</Typography>
          <Box sx={{ width: '120px', height: '30px', display: 'flex', flexDirection: 'row', gap: '15px', marginTop: '-2px' }}>
            <img src={img14} style={{ width: '25px', height: '25px' }} />
            <img src={img15} style={{ width: '25px', height: '25px' }} />
            <img src={img16} style={{ width: '25px', height: '25px' }} />
          </Box>
        </Box>
      </Box>



    </Grid>
  )
}

export default Bpsbooking

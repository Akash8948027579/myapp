import { Box, Typography } from '@mui/material'
import React from 'react'
import img from './Assets/Delivery.png'
import img1 from './Assets/Temperature.png'
import img2 from './Assets/Route.png'
import img3 from './Assets/Navigation arrow.png'
import img4 from './Assets/radial c84e.png'


const Our_services = () => {
  return (
    <Box>

    <img src={img4}/>

    {/*----------------------------------------- Heading  -----------------------------------------------------*/}
        <Box sx={{width:{md:'1158px', xs:'750px'}, height:{md:'160px', xs:'500px'}, marginTop:'-500px', marginLeft:{md:'180px', xs:'150px'}, gap:'24px' }}>
        <Typography variant='h2' sx={{width:{md:'1058px', xs:'600px'}, height:'72px', fontFamily:'Outfit', fontWeight:600, fontSize:'60px', lineHeight:'72px', textAlign:'center'}}>The BPS delivery service</Typography>
            <Typography sx={{width:{md:'1002px', xs:'550px'}, height:'64px', fontFamily:'Asap', fontWeight:'600', fontSize:'16px', lineHeight:'32px', textAlign:'center', paddingTop:{md:'0px', xs:'75px'}, paddingLeft:{md:'0px', xs:'10px'}}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. </Typography>
         </Box>


{/*-------------------------------------------- Service 1 ------------------------------------------------------*/}
         <Box sx={{width:{md:'600px', xs:'400px'}, height:{md:'150px', xs:'200px'}, marginTop:'50px', marginLeft:{md:'80px', xs:'30px'}, gap:'8px', border:'1px solid #F3F2F7', borderRadius:'20px', background:'white', position:'relative'}}>
            <Box sx={{width:'80px', height:'80px', borderRadius:'24px', margin:'30px',padding:'15px', backgroundColor:'#0155A5'}}>
            <img src={img}/>
            </Box>
            <Typography variant='h5' sx={{fontFamily:'Outfit', fontWeight:600, fontSize:'28px', lineHeight:'32px', color:'#1C2F41', marginTop:'-130px', ml:'130px'}}> STAT Deliveries</Typography>
            <Typography sx={{fontFamily:'Asap', fontWeight:600, fontSize:'16px', lineHeight:'32px', marginLeft:'130px', color:'#666666'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br/> facilisis eleifend quam.</Typography>
         </Box>

         {/*---------------------------------------- Service 2  --------------------------------------------------------*/}
         <Box sx={{width:{md:'600px', xs:'400px'}, height:{md:'150px', xs:'200px'}, marginTop:{md:'-150px', xs:'-200px'}, marginLeft:{md:'720px', xs:'450px'}, gap:'8px', border:'1px solid #F3F2F7', borderRadius:'20px', backgroundColor:'white'}}>
            <Box sx={{width:'80px', height:'80px', borderRadius:'24px', margin:'30px',padding:'15px', backgroundColor:'#0155A5'}}>
            <img src={img1}/>
            </Box>
            <Typography variant='h5' sx={{fontFamily:'Outfit', fontWeight:600, fontSize:'28px', lineHeight:'32px', color:'#1C2F41', marginTop:'-130px', ml:'130px'}}> Cold Chain Logistics</Typography>
            <Typography sx={{fontFamily:'Asap', fontWeight:600, fontSize:'16px', lineHeight:'32px', marginLeft:'130px', color:'#666666'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br/> facilisis eleifend quam.</Typography>
         </Box>

         {/*-------------------------------------------- Service 3 ------------------------------------------------------*/}
         <Box sx={{width:{md:'600px', xs:'400px'}, height:{md:'150px', xs:'200px'}, marginTop:'50px', marginLeft:{md:'80px', xs:'30px'}, gap:'8px', border:'1px solid #F3F2F7', borderRadius:'20px', background:'white', position:'relative'}}>
            <Box sx={{width:'80px', height:'80px', borderRadius:'24px', margin:'30px',padding:'15px', backgroundColor:'#0155A5'}}>
            <img src={img2}/>
            </Box>
            <Typography variant='h5' sx={{fontFamily:'Outfit', fontWeight:600, fontSize:'28px', lineHeight:'32px', color:'#1C2F41', marginTop:'-130px', ml:'130px'}}> Good and on-time service</Typography>
            <Typography sx={{fontFamily:'Asap', fontWeight:600, fontSize:'16px', lineHeight:'32px', marginLeft:'130px', color:'#666666'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br/> facilisis eleifend quam.</Typography>
         </Box>

         {/*---------------------------------------- Service 4  --------------------------------------------------------*/}
         <Box sx={{width:{md:'600px', xs:'400px'}, height:{md:'150px', xs:'200px'}, marginTop:{md:'-150px', xs:'-200px'}, marginLeft:{md:'720px', xs:'450px'}, gap:'8px', border:'1px solid #F3F2F7', borderRadius:'20px', background:'white'}}>
            <Box sx={{width:'80px', height:'80px', borderRadius:'24px', margin:'30px',padding:'15px', backgroundColor:'#0155A5'}}>
            <img src={img3}/>
            </Box>
            <Typography variant='h5' sx={{fontFamily:'Outfit', fontWeight:600, fontSize:'28px', lineHeight:'32px', color:'#1C2F41', marginTop:'-130px', ml:'130px'}}> Multi-State Solutions</Typography>
            <Typography sx={{fontFamily:'Asap', fontWeight:600, fontSize:'16px', lineHeight:'32px', marginLeft:'130px', color:'#666666'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br/> facilisis eleifend quam.</Typography>
         </Box>
        
    </Box>
  )
}

export default Our_services

import React from 'react'
import { Box, Typography } from '@mui/material'
import img from './Assets/cart.png'
import img1 from './Assets/Payment.png'
import img2 from './Assets/Office.png'
import img3 from './Assets/delivery box.png'
import img4 from './Assets/radial c84e.png'

const How_to_order = () => {
  return (
    <Box>

    <img src={img4}/>
    <Box sx={{background:'aqua', display:'flex', flexDirection:'row', gap:'20px',width:'100%', whiteSpace:'nowrap', overflow:'auto', position:'absolute', float:'left', cursor:'pointer', letterSpacing:'2px' }}>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
      <Typography>Hello</Typography>
    </Box>

    {/*----------------------------------------- Heading  -----------------------------------------------------*/}
        <Box sx={{width:'100%', height:{md:'160px', xs:'300px'}, marginTop:'-500px', marginLeft:{md:'180px', xs:'none', sm:'none'}, gap:'15px', justifyContent:'center'}}>
        <Typography variant='h2' sx={{width:{md:'1058px', }, height:'72px', fontFamily:'Outfit', fontWeight:600, fontSize:'60px', lineHeight:'72px', textAlign:'center'}}>How to Track Orders in BPS</Typography>
            <Typography sx={{width:{md:'1002px', }, height:'64px', fontFamily:'Asap', fontWeight:'600', fontSize:'16px', lineHeight:'32px', textAlign:'center', paddingTop:{md:'0px', xs:'75px'}, paddingLeft:{md:'0px', xs:'20px'}}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. </Typography>
         </Box>

<Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}}}>
{/*-------------------------------------------- Order 1 ------------------------------------------------------*/}
         <Box sx={{width:{md:'250px', xs:'320px'}, height:{md:'350px', xs:'400px'}, marginTop:'50px', marginLeft:{md:'60px', xs:'150px'}, gap:'2px', border:'1px solid #F3F2F7', borderRadius:'20px', background:'white'}}>
            <Box sx={{width:'80px', height:'80px', borderRadius:'40px', margin:'30px',padding:'0px'}}>
            <img src={img}/>
            </Box>
            <Typography variant='h5' sx={{fontFamily:'Outfit', fontWeight:600, fontSize:'28px', lineHeight:'32px', color:'#1C2F41', marginTop:'-15px', ml:'30px'}}> Enter your <br/> Order Id</Typography>
            <Typography sx={{fontFamily:'Asap', fontWeight:600, fontSize:'16px', lineHeight:'32px', marginLeft:'30px', color:'#666666'}}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/> Sed facilisis eleifend quam, <br/> non efficitur nisi mattis quis.</Typography>
         </Box>

         {/*---------------------------------------- Order 2  --------------------------------------------------------*/}
         <Box sx={{width:{md:'250px', xs:'320px'}, height:{md:'350px', xs:'400px'}, marginTop:'50px', marginLeft:{md:'60px', xs:'150px'}, gap:'2px', border:'1px solid #F3F2F7', borderRadius:'20px', background:'white'}}>
            <Box sx={{width:'80px', height:'80px', borderRadius:'40px', margin:'30px',padding:'15px', backgroundColor:'#0155A5'}}>
            <img src={img1}/>
            </Box>
            <Typography variant='h5' sx={{fontFamily:'Outfit', fontWeight:600, fontSize:'28px', lineHeight:'32px', color:'#1C2F41', marginTop:'-15px', ml:'30px'}}> Track your <br/> Order</Typography>
            <Typography sx={{fontFamily:'Asap', fontWeight:600, fontSize:'16px', lineHeight:'32px', marginLeft:'30px', color:'#666666'}}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/> Sed facilisis eleifend quam, <br/> non efficitur nisi mattis quis.</Typography>
         </Box>
         
         {/*-------------------------------------------- Order 3 ------------------------------------------------------*/}
         <Box sx={{width:{md:'250px', xs:'320px'}, height:{md:'400px', xs:'500px'}, marginTop:'50px', marginLeft:{md:'60px', xs:'150px'}, gap:'2px', border:'1px solid #F3F2F7', borderRadius:'20px', background:'white'}}>
            <Box sx={{width:'80px', height:'80px', borderRadius:'40px', margin:'30px',padding:'15px', backgroundColor:'#0155A5'}}>
            <img src={img2}/>
            </Box>
            <Typography variant='h5' sx={{fontFamily:'Outfit', fontWeight:600, fontSize:'28px', lineHeight:'32px', color:'#1C2F41', marginTop:'-15px', ml:'30px'}}> Please wait, <br/> your order will <br/>arrive soon</Typography>
            <Typography sx={{fontFamily:'Asap', fontWeight:600, fontSize:'16px', lineHeight:'32px', marginLeft:'30px', color:'#666666'}}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/> Sed facilisis eleifend quam, <br/> non efficitur nisi mattis quis.</Typography>
         </Box>

         {/*---------------------------------------- Order 4  --------------------------------------------------------*/}
         <Box sx={{width:{md:'250px', xs:'320px'}, height:{md:'400px', xs:'500px'}, marginTop:'50px', marginLeft:{md:'60px', xs:'150px'}, gap:'2px', border:'1px solid #F3F2F7', borderRadius:'20px', background:'white'}}>
            <Box sx={{width:'80px', height:'80px', borderRadius:'40px', margin:'30px',padding:'15px', backgroundColor:'#0155A5'}}>
            <img src={img3}/>
            </Box>
            <Typography variant='h5' sx={{fontFamily:'Outfit', fontWeight:600, fontSize:'28px', lineHeight:'32px', color:'#1C2F41', marginTop:'-15px', ml:'30px'}}> Your order has successfully arrived.</Typography>
            <Typography sx={{fontFamily:'Asap', fontWeight:600, fontSize:'16px', lineHeight:'32px', marginLeft:'30px', color:'#666666'}}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/> Sed facilisis eleifend quam, <br/> non efficitur nisi mattis quis.</Typography>
         </Box>
         </Box>
        
    </Box>
 
  )
}

export default How_to_order

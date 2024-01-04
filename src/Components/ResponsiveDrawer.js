import { useState }  from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import img from './Assets/Icon1.png'
import img1 from './Assets/docIcon.png'
import img2 from './Assets/Icon-3.png'
import img3 from './Assets/Icon-4.png'
import img4 from './Assets/UncolPen.png'
import img5 from './Assets/ColWallet.png'
import img6 from './Assets/Icon-7.png'
import img25 from './Assets/search.png'
import img26 from './Assets/placeholder.png'
import img20 from './Assets/Icon11.png'
import img21 from './Assets/Icon12.png'
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Input, TextField} from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const drawerWidth = 240;


function ResponsiveDrawer(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuData, setmenuData] = useState(" ");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Typography sx={{ width: '150px', height: '55px', padding: '40px, 20px', fontWeight: 700, fontSize: '70px', color: '#0155A5', marginTop:'-65px', marginLeft:'10px' }}>BPS</Typography>
      
      <List>
      
      <Grid sx={{ width: '200px', height: '220px', marginLeft: '10px', marginTop: '40px' }}>
          <Box sx={{ width: '200px', height: '35px' }}>
            <img src={img} alt='' style={{ paddingLeft: '2px', paddingTop: '3px' }} />
            <Typography sx={{ color: '#464255', fontSize: 16, fontWeight: '500', paddingLeft: '30px', marginTop: '-20px' }}>Dashboard</Typography>
          </Box>
          <Box sx={{ width: '200px', height: '35px', marginTop: '0px' }}>
            <img src={img1} alt='' style={{ paddingLeft: '2px', paddingTop: '3px', marginTop: '0px' }} />
            <Typography sx={{ fontSize: 16, fontWeight: '500', paddingLeft: '30px', marginTop: '-20px', color: '#464255' }}>Manage Booking</Typography>
          </Box>
          <Box sx={{ width: '200px', height: '35px' }}>
            <img src={img2} alt='' style={{ paddingLeft: '2px', marginTop: '0px' }} />
            <Typography sx={{ color: '#464255', fontSize: 16, fontWeight: '500', paddingLeft: '30px', marginTop: '-20px' }}>Manage Vehicle</Typography>
          </Box>
          <Box sx={{ width: '200px', height: '35px' }}>
            <img src={img3} alt='' style={{ paddingLeft: '2px', paddingTop: '3px' }} />
            <Typography sx={{ color: '#464255', fontSize: 16, fontWeight: '500', paddingLeft: '30px', marginTop: '-20px' }}>Manage Driver</Typography>
          </Box>
          <Box sx={{ width: '200px', height: '35px' }}>
            
            <img src={img4} alt='' style={{ paddingLeft: '2px', paddingTop: '3px', marginTop: '0px' }} />
            <Typography sx={{ color: '#464255', fontSize: 16, fontWeight: '500', paddingLeft: '30px', marginTop: '-20px' }}>Manage Customer</Typography>
          </Box>
          <Box sx={{ width: '200px', height: '35px', background: '#D8ECFF' }}>
          <Grid style={{ width: '3px', height: '35px', background: 'blue', borderRadius: 2, marginLeft: '-4px' }} />
            <img src={img5} alt='' style={{ paddingLeft: '2px', paddingTop: '3px', marginTop:'-70px' }} />
            <Typography sx={{ color: '#0155A5', fontSize: 16, fontWeight: '700', paddingLeft: '30px', marginTop: '-55px' }}>Manage User</Typography>
          </Box>
          <Box sx={{ width: '200px', height: '35px' }}>
            <img src={img6} alt='' style={{ paddingLeft: '2px', paddingTop: '3px' }} />
            <Typography sx={{ color: '#464255', fontSize: 16, fontWeight: '500', paddingLeft: '30px', marginTop: '-20px' }}>Report</Typography>
          </Box>
        </Grid>
      </List>
      <Divider/> 

      <List><Grid sx={{ width: '200px', height: '120px', marginLeft: '7px', marginTop: '40px', background: '#0155A5', borderRadius: '7px' }}>
        <Typography sx={{ width: '100%', height: '60px', fontWeight: 400, fontSize: '14px', color: 'white', fontFamily: 'Inter', paddingLeft: '15px', paddingTop: '6px' }}> Organize your <br /> bookings through button <br />bellow!</Typography>
        <Button sx={{ background: 'white', width: '90px', height: '25px', fontSize: '12px', marginLeft: '15px', marginTop: '14px' }}>
          <Typography sx={{ fontSize: '9px', color: '#464255' }}>+Add Booking</Typography>
        </Button>
      </Grid></List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor:'#F3F2F7', height:'15px', marginTop:'10px'
        }} elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color:'black'}} />
          </IconButton>
          <Typography sx={{ width: '100px', height: '55px', padding: '40px, 20px', fontWeight: 700, fontSize: '40px', color: '#0155A5', marginTop:'-5px', marginLeft:'20px', display: { sm: 'none' } }}>BPS</Typography>
          <Box sx={{ width:{sm:'500px', xs:'250px'}, marginTop:'25px', marginLeft:{sm:'5px', xs:'50px'} }}>
          <TextField placeholder='search here' sx={{ width: '100%', background: 'white', height: '100%', marginTop: '0px' }} InputProps={{ sx: { height: '40px' } }} />
          <Box sx={{marginLeft: {sm:'450px', xs:'210px'}}}><img src={img25} alt='' style={{  marginTop: '-70px', position: 'relative', height: '20px', width: '20px' }} /></Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Badge badgeContent={21} color="primary" sx={{ width: '35px', height: '35px', borderRadius: '10px', background: '#2D9CDB26', marginLeft: {sm:'50px', xs:'35px'}, marginTop: '1px' }}>
          <NotificationsNoneOutlinedIcon color="primary" style={{ marginTop: '5px', marginLeft: '5px' }} />
        </Badge>
        <Badge badgeContent={53} color="primary" sx={{ width: '35px', height: '35px', borderRadius: '10px', background: '#2D9CDB26', marginLeft: {sm:'50px', xs:'35px'}, marginTop: '1px' }}>
          <img src={img21} alt='' color="primary" style={{ marginTop: '6px', marginLeft: '6px', width: '25px', height: '25px' }} />
        </Badge>
        <Badge badgeContent={19} color="error" sx={{ width: '35px', height: '35px', borderRadius: '10px', background: '#FF5B5B26', marginLeft: {sm:'50px', xs:'35px'}, marginTop: '1px' }}>
          <img src={img20} alt='' color="primary" style={{ marginTop: '8px', marginLeft: '7px', width: '20px', height: '20px' }} />
        </Badge>
              </Button>
            
          </Box>

{/*----------------------------------------- Badge in menu options -------------------------------------------- */}
          <Box sx={{ flexGrow: 0 }}>
          <Typography sx={{color:'#464255', fontSize:'16px', fontFamily:'Inter', fontWeight:600, marginTop:'20px', display:{xs:'none', sm:'block'}}}>Hello, Samantha</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft:{sm:'none', xs:'180px'}, marginTop:{sm:'-50px', xs:'none'}  }}>
                <Avatar alt="Remy Sharp" src={img26} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem onClick={handleCloseUserMenu} sx={{marginLeft:'-10px'}}>
                <Badge badgeContent={21} color="primary" sx={{ width: '35px', height: '35px', borderRadius: '10px', background: '#2D9CDB26', marginLeft: {sm:'50px', xs:'35px'}, marginTop: '1px' }}>
          <NotificationsNoneOutlinedIcon color="primary" style={{ marginTop: '5px', marginLeft: '5px' }} />
        </Badge>
        <Badge badgeContent={53} color="primary" sx={{ width: '35px', height: '35px', borderRadius: '10px', background: '#2D9CDB26', marginLeft: {sm:'50px', xs:'35px'}, marginTop: '1px' }}>
          <img src={img21} alt='' color="primary" style={{ marginTop: '6px', marginLeft: '6px', width: '25px', height: '25px' }} />
        </Badge>
        <Badge badgeContent={19} color="error" sx={{ width: '35px', height: '35px', borderRadius: '10px', background: '#FF5B5B26', marginLeft: {sm:'50px', xs:'35px'}, marginTop: '1px' }}>
          <img src={img20} alt='' color="primary" style={{ marginTop: '8px', marginLeft: '7px', width: '20px', height: '20px' }} />
        </Badge>
                </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
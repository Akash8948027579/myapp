import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState }  from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import img from './Assets/Icon1.png'
import img1 from './Assets/docIcon.png'
import img2 from './Assets/Icon-3.png'
import img3 from './Assets/Icon-4.png'
import img4 from './Assets/colorPenIcon.png'
import img5 from './Assets/ColWallet.png'
import img6 from './Assets/Icon-7.png'
import img25 from './Assets/search.png'
import img26 from './Assets/placeholder.png'
import img20 from './Assets/Icon11.png'
import img21 from './Assets/Icon12.png'
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Input, TextField} from '@mui/material'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MyComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
      </Container>
    </AppBar>
  );
}
export default MyComponent;
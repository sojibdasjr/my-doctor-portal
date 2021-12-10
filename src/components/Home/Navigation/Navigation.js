import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navigation.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='nav-title' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor Portal
          </Typography>
          <Link className='nav-text'  to ='/home'><Button color="inherit">Home</Button></Link>
          <Link className='nav-text'  to ='/appointment'><Button color="inherit">Appointment</Button></Link>
          <Link className='nav-text'  to = '/login'><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  const defaultStyleForLink = {
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',    
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#9ed7e6', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Link to='/' style={defaultStyleForLink} >                    
              AMS
            </Link>
          </Typography> 
          <Button>
            <Link to='/info' style={defaultStyleForLink}>
                Info            
            </Link>
          </Button> 
          <Button>
            <Link to='/tli' style={defaultStyleForLink}>
                Tli            
            </Link>
          </Button> 
          <Button>
            <Link to='/tsi' style={defaultStyleForLink}>
                Tsi            
            </Link>
          </Button> 
          <Button>
            <Link to='/calculate' style={defaultStyleForLink}>
                Calculator            
            </Link>
          </Button>         
          <Button>
            <Link to='/sign-in' style={defaultStyleForLink}>
                Login            
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

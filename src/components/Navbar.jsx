import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const defaultStyleForLink = {
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',    
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{ background: '#9ed7e6', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{marginRight: '16px'}}
            // className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            <Link to='/' style={defaultStyleForLink}>AMS</Link>
          </Typography> 

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              {/* Your menu icon (e.g., MenuIcon) */}
            </IconButton>
          ) : (
            <>
              <Button>
                <Link to='/info' style={defaultStyleForLink}>Info</Link>
              </Button> 
              <Button>
                <Link to='/tli' style={defaultStyleForLink}>Tli</Link>
              </Button> 
              <Button>
                <Link to='/tsi' style={defaultStyleForLink}>Tsi</Link>
              </Button> 
              <Button>
                <Link to='/calculate' style={defaultStyleForLink}>Calculator</Link>
              </Button> 
              <Button>
                <Link to='/hydrochem' style={defaultStyleForLink}>Parametres</Link>
              </Button>        
              <Button>
                <Link to='/sign-in' style={defaultStyleForLink}>Login</Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <div sx={{width: '250px'}}>
          <List>
            <ListItem button>
              <ListItemText primary={<Link to='/' style={defaultStyleForLink}>AMS</Link>} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={<Link to='/info' style={defaultStyleForLink}>Info</Link>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<Link to='/tli' style={defaultStyleForLink}>Tli</Link>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<Link to='/tsi' style={defaultStyleForLink}>Tsi</Link>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<Link to='/calculate' style={defaultStyleForLink}>Calculator</Link>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<Link to='/hydrochem' style={defaultStyleForLink}>Parametres</Link>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<Link to='/sign-in' style={defaultStyleForLink}>Login</Link>} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default NavBar;

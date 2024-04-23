import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние аутентификации пользователя
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const defaultStyleForLink = {
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',    
  };

  // Функция для выхода из аккаунта
  const handleLogout = () => {
    // Очищаем состояние аутентификации
    setIsLoggedIn(false);
    // Перенаправляем пользователя на главную страницу
    window.location.href = "/";
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
              {isLoggedIn ? (
                <Button onClick={handleLogout}>Logout</Button>
              ) : (
                <Button>
                  <Link to='http://80.72.180.130:8581/auth/operator/login' target='_blank' style={defaultStyleForLink}>Login</Link>                  
                </Button>
              )}
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
            {isLoggedIn ? (
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            ) : (
              <ListItem button>
              <ListItemText primary={<Link to='http://80.72.180.130:8581/auth/operator/login' target='_blank' style={defaultStyleForLink}>Login</Link>} />
            </ListItem>
            )}
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default NavBar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material';
import { HomePage } from '../Home/HomePage';
import { AboutMePage } from '../About/AboutMePage';
import { ProjectPage } from '../Projects/ProjectPage';
import { ContactPage } from '../Contact/ContactPage';
import { SkillsPage } from '../Skills/SkillsPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

const pages = ['HOME', 'PROJECTS', 'ABOUT', 'SKILLS','CONTACT'];

function ResponsiveAppBar() {

  //reference for the menu when opened in appbar 
  const refMenu = React.useRef(null);

  const [pageSelected, setPageSelected] = React.useState('HOME');

  //to close or open the menu
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  //to send the boolean value to useEffect
  const open = Boolean(anchorElNav);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    setPageSelected(page);
    setAnchorElNav(null);
  };
  
  const handleCloseNavResizing = () => {
    setAnchorElNav(null);
  }

  //checks if clicked outside or inside when the menu item is opened inside the appbar
  const handleClickOutside = (e) => {
    if(!refMenu.current.contains(e.target)){
      setAnchorElNav(null);
    } else {
      setAnchorElNav(null);
    }
  }

  React.useEffect(() => {
    const handleResize = () => {
      // Close menu if it's open and user resizes
      if (open) {
        handleCloseNavResizing();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  pointerEvents: 'none'
                }}
              >
                PORTFOLIO
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
                    ref={refMenu}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
              </Box>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    pointerEvents: 'none'
                  }}
                >
                  PORTFOLIO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap:5, ml: { md: -15, lg: -35 }, pl: {md: 10, lg: 20 } }} >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={() => handleCloseNavMenu(page)}
                      sx={{ my: 2, color: page === pageSelected ? 'yellow' : 'white', display: 'block', '&:hover': { color: 'yellow' } }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box> 
            </Toolbar>
          </Container>
        </AppBar>     
        </ThemeProvider>
        { pageSelected == 'HOME' && <HomePage /> }
        { pageSelected == 'PROJECTS' && <ProjectPage /> }
        { pageSelected == 'ABOUT' && <AboutMePage /> }
        { pageSelected == 'SKILLS' && <SkillsPage /> }
        { pageSelected == 'CONTACT' && <ContactPage /> }
    </>  
  );
}
export default ResponsiveAppBar;

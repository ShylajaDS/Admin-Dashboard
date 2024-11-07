import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { styled } from '@mui/system';


const StyledTypography = styled(Typography)({
  letterSpacing: '.3rem',
  fontFamily: 'Pacifico, cursive',
});

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', height: '50px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '7px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FastfoodIcon fontSize="large" style={{ marginRight: '5px',color: 'orange', fontWeight: 'bolder' }} />
            <StyledTypography variant="h5" component="div">
              <strong>Zippy Express</strong>
            </StyledTypography>
          </div>
        </div>
        <div className='Navbar' style={{ display: 'flex', alignItems: 'center', marginTop: '7px' }}>
          <ul style={{ display: 'flex', listStyleType: 'none', gap: '15px', fontSize: '20px', margin: '0', padding: '0' }}>
            <li>
            <Link to="/search" style={{ textDecoration: 'none', color: 'inherit', alignItems: 'center' }}>
                <SearchIcon fontSize="medium" />
            </Link>
            </li><br></br>
            <li>
              <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', alignItems: 'center' }}>
                <ShoppingCartIcon fontSize="medium" />
              </Link>
            </li><br></br>
            <li>
              <Link to="/sign-in" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <PersonIcon fontSize="medium" />
              </Link>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

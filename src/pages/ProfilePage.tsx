import React from 'react';
import homeBackground from '../assets/images/homeBackground.jpg';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const ProfilePage: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          padding: '1rem',
          top: 0,
          right: 0
        }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
          <Button
            component={RouterLink}
            to="/home"
            className="appbar-button"
            variant="text"
            startIcon={<HomeTwoToneIcon />}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ProfilePage;

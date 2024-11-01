import { AppBar, Button, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import React from 'react';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const CustomAppBar: React.FC = () => {
  return (
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
          justifyContent: 'flex-end',
          gap: '1rem'
        }}>
        <Button
          component={RouterLink}
          to="/home"
          className="appbar-button"
          variant="text"
          startIcon={<HomeTwoToneIcon />}>
          Home
        </Button>
        <Button
          component={RouterLink}
          to="/profile"
          className="appbar-button"
          variant="text"
          startIcon={<AccountCircleTwoToneIcon />}>
          User Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

import { AppBar, Button, Toolbar } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import React from 'react';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from '../api/auth';

const CustomAppBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.ok) {
        navigate('/login');
      }
    } catch (error) {
      console.error('An error occurred during logout: ', error);
    }
  };

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
          to="/"
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
        <Button
          onClick={handleLogout}
          className="appbar-button"
          variant="text"
          startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

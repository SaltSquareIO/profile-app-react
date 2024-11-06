import { AppBar, Button, Toolbar } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import React, { useState } from 'react';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from '../api/auth';
import ErrorModal from './ErrorModal';

const CustomAppBar: React.FC = () => {
  const navigate = useNavigate();
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
  const [errorDescription, setErrorDescription] = useState<string | null>(null);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.ok) {
        navigate('/login');
      } else {
        setErrorDescription('Something went wrong, please try again!');
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      setErrorDescription('Something went wrong, please try again!');
      setIsErrorModalOpen(true);
    }
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
    setErrorDescription(null);
  };

  return (
    <>
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
      <ErrorModal
        isOpen={isErrorModalOpen}
        description={errorDescription}
        onClose={closeErrorModal}
      />
    </>
  );
};

export default CustomAppBar;

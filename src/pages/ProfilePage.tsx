import React, { useState, useEffect } from 'react';
import homeBackground from '../assets/images/homeBackground.jpg';
import { Box } from '@mui/material';
import UserProfileTable from '../components/UserProfileTable';
import CustomAppBar from '../components/CustomAppBar';
import { fetchUserProfile } from '../api/user';
import ErrorPage from './ErrorPage';

interface UserProfileData {
  email: string;
  firstName: string;
  lastName: string;
}

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const profile = await fetchUserProfile();
        if (!profile) {
          setHasError(true);
        } else {
          setUserProfile(profile);
        }
      } catch (error) {
        setHasError(true);
      }
    };
    fetchUser();
  }, []);

  if (hasError) {
    return <ErrorPage />;
  }

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <CustomAppBar />
      <Box
        sx={{
          width: '100vw',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        {userProfile && <UserProfileTable data={userProfile} />}
      </Box>
    </Box>
  );
};
export default ProfilePage;

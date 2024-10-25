import React, { useState, useEffect } from 'react';
import homeBackground from '../assets/images/homeBackground.jpg';
import { Box, CircularProgress } from '@mui/material';
import UserProfileTable from '../components/UserProfileTable';
import CustomAppBar from '../components/CustomAppBar';
import { fetchUserProfile } from '../api/user';

interface UserProfileData {
  email: string;
  firstName: string;
  lastName: string;
}

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const profile = await fetchUserProfile();
        if (profile) {
          setUserProfile(profile);
        }
      } catch (error) {
        console.error('Error fetching user: ', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Box
        sx={{
          width: '100vw',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <CustomAppBar />
        {userProfile ? <UserProfileTable data={userProfile} /> : <CircularProgress />}
      </Box>
    </Box>
  );
};
export default ProfilePage;

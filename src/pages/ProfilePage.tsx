import React, { useState, useEffect } from 'react';
import homeBackground from '../assets/images/homeBackground.jpg';
import { Box } from '@mui/material';
import UserProfileTable from '../components/UserProfileTable';
import CustomAppBar from '../components/CustomAppBar';

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
        const response = await fetch('/user/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUserProfile({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName
          });
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
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
        <CustomAppBar />
        {userProfile ? <UserProfileTable data={userProfile} /> : <div>Loading...</div>}
      </Box>
    </Box>
  );
};
export default ProfilePage;

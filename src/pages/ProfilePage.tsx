import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import UserProfileTable from '../components/UserProfileTable';
import { fetchUserProfile } from '../api/user';
import ErrorPage from './ErrorPage';
import PageLayout from '../components/PageLayout';

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
    <PageLayout>
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
    </PageLayout>
  );
};
export default ProfilePage;

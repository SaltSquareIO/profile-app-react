import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, IconButton } from '@mui/material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const BackgroundVideo: React.FC = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.paper'
      }}>
      <ReactPlayer
        url="https://www.youtube.com/embed/liIlW-ovx0Y?controls=0&modestbranding=1&showinfo=0&rel=0&autoplay=1&loop=1&playlist=liIlW-ovx0Y"
        playing
        muted={isMuted}
        loop
        width="70%"
        height="70%"
        onReady={() => setIsVideoReady(true)}
        style={{
          opacity: isVideoReady ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
          pointerEvents: 'none'
        }}
      />
      <IconButton
        onClick={toggleMute}
        sx={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem'
        }}>
        {isMuted ? (
          <VolumeOffIcon sx={{ fontSize: '2.5rem' }} />
        ) : (
          <VolumeUpIcon sx={{ fontSize: '2.5rem' }} />
        )}
      </IconButton>
    </Box>
  );
};

export default BackgroundVideo;

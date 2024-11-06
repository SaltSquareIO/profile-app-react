import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

interface ErrorModalProps {
  isOpen: boolean;
  description: string | null;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, description, onClose }) => {
  return (
    <Modal id="error-modal" open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '25rem',
          backgroundColor: 'background.paper',
          boxShadow: 24,
          p: '2rem',
          textAlign: 'center'
        }}>
        <Typography id="modal-title" variant="h6" component="h2" sx={{ color: 'text.primary' }}>
          <ErrorIcon sx={{ fontSize: '2rem' }} />
        </Typography>
        <Typography id="modal-description" sx={{ mt: '1rem', color: 'text.secondary' }}>
          {description}
        </Typography>
        <Button
          id="modal-ok-button"
          onClick={onClose}
          color="primary"
          sx={{ mt: '1rem', color: 'text.primary' }}>
          OK
        </Button>
      </Box>
    </Modal>
  );
};

export default ErrorModal;

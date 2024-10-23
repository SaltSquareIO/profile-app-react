import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

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
          width: 400,
          backgroundColor: 'background.paper',
          boxShadow: 24,
          p: 4,
          textAlign: 'center'
        }}>
        <Typography id="modal-title" variant="h6" component="h2" sx={{ color: 'text.primary' }}>
          Error
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2, color: 'text.secondary' }}>
          {description}
        </Typography>
        <Button
          id="modal-ok-button"
          onClick={onClose}
          color="primary"
          sx={{ mt: 2, color: 'text.primary' }}>
          OK
        </Button>
      </Box>
    </Modal>
  );
};

export default ErrorModal;

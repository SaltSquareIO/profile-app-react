import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import { Colors } from '../assets/styles/colors';

interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  submitButtonText: string;
  navigationText?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  title,
  children,
  onSubmit,
  submitButtonText,
  navigationText
}) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box
        sx={{
          height: '100vh',
          width: '80vw',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
        <Paper
          elevation={3}
          sx={{
            padding: '3rem',
            width: '25rem',
            margin: '2rem 2rem',
            borderRadius: 3,
            boxShadow: '0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.3)'
          }}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            color="primary"
            sx={{
              fontSize: '2rem'
            }}>
            {title}
          </Typography>
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginBottom: '2rem'
            }}>
            {children}
            <Button
              id="submit-button"
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                marginTop: '1rem'
              }}>
              {submitButtonText}
            </Button>
          </Box>
          {navigationText && (
            <Box textAlign="center">
              <Typography variant="body1" sx={{ color: Colors.black }}>
                {navigationText}
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default Form;

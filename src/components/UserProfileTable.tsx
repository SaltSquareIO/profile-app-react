import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography
} from '@mui/material';

interface UserProfileData {
  email: string;
  firstName: string;
  lastName: string;
}

interface UserProfileTableProps {
  data: UserProfileData;
}

const UserProfileTable: React.FC<UserProfileTableProps> = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: '40.625rem',
        margin: 'auto',
        borderRadius: '0.1875rem',
        boxShadow: '0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.3)',
        padding: '1.5rem'
      }}>
      <Typography variant="h6" align="center" sx={{ padding: '1rem', color: 'text.primary' }}>
        User Profile
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>{data.firstName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>{data.lastName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{data.email}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserProfileTable;

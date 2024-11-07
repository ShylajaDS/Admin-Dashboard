import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducers/authActions.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'whitesmoke',
        border:'0.5px solid black',
        color: 'pink',
      }}
    >
      <TextField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '10px' }}>
        Sign In
      </Button>
    </Box>
  );
};

export default SignInForm;

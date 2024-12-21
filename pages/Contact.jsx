import React from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Academica</title>
        <meta name="description" content="Get in touch with Academica for any queries or support" />
      </Helmet>

      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      {...register('name', { required: 'Name is required' })}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      {...register('subject', { required: 'Subject is required' })}
                      error={!!errors.subject}
                      helperText={errors.subject?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      {...register('message', { required: 'Message is required' })}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Get in Touch
              </Typography>
              <Typography paragraph>
                We'd love to hear from you. Please fill out the form or use the contact information below.
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Address
                </Typography>
                <Typography paragraph>
                  123 Education Street<br />
                  Tech City, TC 12345
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Phone
                </Typography>
                <Typography paragraph>
                  +1 (234) 567-8900
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <Typography paragraph>
                  info@academica.com
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;

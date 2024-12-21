import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const team = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      image: 'https://via.placeholder.com/150',
    },
    // Add more team members as needed
  ];

  const clients = [
    'University of Technology',
    'International School of Excellence',
    'Global Education Institute',
    'Smart Learning Academy',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Academica</title>
        <meta name="description" content="Learn about Academica's team and our valued clients" />
      </Helmet>

      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          About Us
        </Typography>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {team.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {member.name}
                    </Typography>
                    <Typography color="text.secondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Clients Section */}
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Clients
          </Typography>
          <Grid container spacing={2}>
            {clients.map((client) => (
              <Grid item xs={12} sm={6} md={3} key={client}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {client}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;

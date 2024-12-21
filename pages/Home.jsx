import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Transform Your Institution with Academica
            </Typography>
            <Typography variant="h5" gutterBottom>
              Comprehensive Solutions for Educational Excellence
            </Typography>
            <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
              Get Started
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Products Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Our Solutions
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {['ERP', 'LMS', 'School Management', 'College Management'].map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {product}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Comprehensive {product} solution designed for modern educational institutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              'Modern Technology',
              'Easy Integration',
              '24/7 Support',
              'Customizable Solutions'
            ].map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Experience the best with our cutting-edge solutions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;

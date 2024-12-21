import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const products = [
    {
      title: 'ERP Solution',
      description: 'Comprehensive enterprise resource planning system for educational institutions.',
      features: [
        'Student Management',
        'Financial Management',
        'HR Management',
        'Inventory Management',
      ],
    },
    {
      title: 'Learning Management System',
      description: 'Modern e-learning platform for interactive online education.',
      features: [
        'Virtual Classrooms',
        'Course Management',
        'Assessment Tools',
        'Progress Tracking',
      ],
    },
    {
      title: 'School Management',
      description: 'Complete school administration and management solution.',
      features: [
        'Attendance Tracking',
        'Grade Management',
        'Parent Communication',
        'Timetable Management',
      ],
    },
    {
      title: 'College Management',
      description: 'Advanced system for higher education institutions.',
      features: [
        'Academic Planning',
        'Research Management',
        'Alumni Network',
        'Campus Management',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Products - Academica</title>
        <meta name="description" content="Explore our comprehensive education management solutions" />
      </Helmet>

      <Container sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Our Products
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.title}>
              <Card>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Key Features:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {product.features.map((feature) => (
                      <Typography component="li" key={feature}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="large" color="primary">
                    Learn More
                  </Button>
                  <Button size="large" color="secondary" variant="contained">
                    Request Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Products;

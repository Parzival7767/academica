import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block">Home</Link>
            <Link href="/about" color="inherit" display="block">About Us</Link>
            <Link href="/products" color="inherit" display="block">Products</Link>
            <Link href="/blog" color="inherit" display="block">Blog</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <Link href="/products/erp" color="inherit" display="block">ERP Solutions</Link>
            <Link href="/products/lms" color="inherit" display="block">Learning Management</Link>
            <Link href="/products/school" color="inherit" display="block">School Management</Link>
            <Link href="/products/college" color="inherit" display="block">College Management</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2">
              Email: info@academica.com
            </Typography>
            <Typography variant="body2">
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body2">
              Address: Your Address Here
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Academica. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

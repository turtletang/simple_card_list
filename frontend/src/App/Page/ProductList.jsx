import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  //implement the get products function
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  //implement the delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Title of the page */}
      <Box>
        <Typography
          variant="h4"
          component="div"
          align="center"
          style={{ fontWeight: 'bold' }}
          gutterBottom
        >
          Simple Card List
        </Typography>

      </Box>

      {/* Grid to display product cards */}
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Box position="relative">
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageUrl}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body1" sx={{ marginTop: 1 }}>
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  
                </CardContent>
              </Card>
              {/* Trash icon fixed on the right corner of cards */}
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(product.id)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'lightgray'
                  }
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default ProductList;
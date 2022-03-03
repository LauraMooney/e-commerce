  
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import HeaderImg from '../../assets/header.png';
import Footer from '../../assets/footer.png';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;


  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.header}>
        <img src={HeaderImg} alt="header" height="300px" className={classes.header} /> 
        <p>Tiger Rose Jewellery brings you this seasons new collection of beautiful, handmade jewellery. Stand out from the crowd with unique and stunning jewellery.
          Shop Now!</p></div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.footer}>
      <img src={Footer} alt="footer" className={classes.footer} />
      </div>
    </main>
  );
};

export default Products;
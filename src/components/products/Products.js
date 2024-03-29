import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import { useSelector } from "react-redux";
import theme1 from '../../img/Asssfsdet 1 1.png'
import background from '../../img/png.png'
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);


  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content} style={{ background: themeColor,backgroundImage: `url(${background})`,padding:"6%",marginTop:"-6%"}}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;


import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from './styles';
import {changeColor} from '../../../features/changeColor';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const handleAddToCart = () => onAddToCart(product.id, 1);

  const [color,setColor] = useState("");
  const dispatch = useDispatch();
 
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

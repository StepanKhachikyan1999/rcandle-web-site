import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
import useStyles from "./styles";
import './prod.css';
import { Route, NavLink } from 'react-router-dom';
import { changeColor } from "../../../features/changeColor";
import ProductMain from './ProductMain'
const styles = theme => ({
  tr: {
    background: "#f1f1f1",
    '&:hover': {
       background: "#f00",
    },
  },
});

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const handleAddToCart = () => onAddToCart(product.id, 1);
  // const handleAddMain = () => 


  // const [color, setColor] = useState("");
  // const dispatch = useDispatch();

  return (
    <Card className={classes.root}
    className={classes.styleHover}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent >
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2"
          style={{borderBottom:"2px solid #c09c6f"}}>
            {product.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontSize: "15px", color: "green" }}
          >
            {product.price.formatted} ֏
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      {/* <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      /> */}
      {/* <button onClick={() => dispatch(changeColor(color))}>Change Color</button> */}
      <CardActions disableSpacing className={classes.cardActions}
      style={{display:"flex",justifyContent:"space-between"}}>
        <Route path="/" component={ProductMain}>
          <NavLink to="/ppp" style={{textDecoration:"none"}}>
      <Button
            size="large"
            type="button"
            variant="contained"
            style={{backgroundColor:"#c09c6f",color:"white",borderRadius:"25px"}}
          >
            See More
          </Button>
          </NavLink>
          </Route>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

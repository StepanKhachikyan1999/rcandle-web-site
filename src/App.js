import './App.css';
import React,{useState,useEffect} from 'react'
import Header from './components/Header/Header';
import textCandle from './img/textCandle.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/carousel/Carousel'
import About from './components/About/About';
import GetPriceList from './components/getPriceList/GetPriceList';
import image3 from './img/image3.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Products from './components/products/Products';
import {commerce} from './lib/commerce'
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/Checkout/Checkout';

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  // const [items,setItems] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const filterItem = (descripItem) => {
    const updatedItems = products.filter((curElem) => {
        return curElem.description === descripItem;
    })

    setProducts(updatedItems)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
    <Router>
      <Switch>
    <div className="App">

    <Route exact path="/">
      <Header totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
      </Route>

      <Route exact path="/">
      <div><img src={textCandle} style={{width:"100%"}} /></div>
      </Route>

      <Route exact path="/">
      <Carousel />
      </Route>

      <Route exact path="/">
      <About />
      </Route>

          <Route exact path="/">
            <div className="categories">
            {/* <button onClick={fetchProducts()} style={{background:"red"}}>Թարմացնել ցուցակը</button> */}
            <button onClick={() => filterItem('<p>animal</p>')}>կենդանիներ</button>
            <button onClick={() => filterItem('<p>flower</p>')}>ծաղիկ</button>
            <button onClick={() => filterItem('<p>birthday</p>')}>ծննդյան</button>
            <button onClick={() => products(products)}>ամբողջը</button>
            </div>
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
          <Route exact path="/">
      <GetPriceList />
      </Route>
      <Route exact path="/">
      <div className="whiteBackground"></div>
      <div><img src={textCandle} style={{width:"100%"}} /></div>
      <div className="contactUs">
      <ContactUs />
        <img src={image3} style={{width:"100%"}} />
        </div>
      </Route>
      <Route exact path="/">
      <Footer />
      </Route>
    </div>
    </Switch>
    </Router>
  );
}

export default App;

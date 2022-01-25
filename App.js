import { useState } from 'react';
import Cart from './component/Cart/Cart';
import Footer from './component/Layout/Footer';
import Header from './component/Layout/Header';
import Products from './component/Products/Products';
import CartProvider from './Store/CartProvider';

function App() {
  const [cart, setCart] = useState(false);
  const hideCartHandler = () => {
    setCart(false);
  };
  const showCartHandler = () => {
    setCart(true);
  };
  return (
    <CartProvider>
      <Header cart={showCartHandler} />
      <Products />
      {cart && <Cart onClick={hideCartHandler} />}
      <Footer />
    </CartProvider>
  );
}

export default App;

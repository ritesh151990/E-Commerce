import { useState } from 'react';
import Cart from './component/Cart/Cart';
import Footer from './component/Layout/Footer';
import Header from './component/Layout/Header';
import Products from './component/Products/Products';

function App() {
  const [cart, setCart] = useState(false);
  const hideCartHandler = () => {
    setCart(false);
  };
  const showCartHandler = () => {
    setCart(true);
  };
  return (
    <div>
      <Header cart={showCartHandler} />
      <Products />
      {cart && <Cart onClick={hideCartHandler} />}
      <Footer />
    </div>
  );
}

export default App;

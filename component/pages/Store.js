import { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Products from "../Products/Products";
import CartProvider from "../../Store/CartProvider";

const Store = (props) => {
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
};

export default Store;

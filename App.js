import CartProvider from './Store/CartProvider';
import { Route } from 'react-router-dom';
import About from './component/Layout/About';
import Home from './component/Layout/Home';
import Store from './component/pages/Store';
import ContactUS from './component/Layout/ContactUS';

function App() {
  
  return (
    <CartProvider>
      <Route path="/store">
        <Store />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact-us">
        <ContactUS/>
      </Route>
    </CartProvider>
  );
}

export default App;

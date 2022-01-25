import { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartConext from '../../Store/cart-context';
import './Header.css'

const Header = (props) => {
    const cartCtx = useContext(CartConext);

    const number = cartCtx.items.reduce((currNum,item) => {
        return currNum + 1;
    },0)
  return (
    <Fragment>
      <div className="up">
        <nav className="h3">
          <a className="heada" href=" ">
            HOME
          </a>
          <a className="heada" href=" ">
            STORE
          </a>
          <NavLink  to="/about">
            ABOUT
          </NavLink>
          <button className="butt" onClick={props.cart}>
            Cart
          </button>
          <span className="num">{number}</span>
        </nav>
      </div>
      <div className="down">
        <h1 className="h1">The Generics</h1>
      </div>
    </Fragment>
  );
};

export default Header;

import { Fragment } from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <Fragment>
      <div className="up">
        <h3 className="h3">
          <a className="heada" href=" ">
            HOME
          </a>
          <a className="heada" href=" ">
            STORE
          </a>
          <a className="heada" href=" ">
            ABOUT
          </a>
          <button className="butt" onClick={props.cart}>Cart</button>
        </h3>
      </div>
      <div className="down">
        <h1 className="h1">The Generics</h1>
      </div>
    </Fragment>
  );
};

export default Header;

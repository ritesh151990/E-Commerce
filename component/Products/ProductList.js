import { Fragment } from "react";
import "./ProductList.css";
const ProductList = props => {
    const imgsrc = props.img;
    return (
      <Fragment>
        <ul>
          <div>Title: {props.title}</div>
          <div>
            <img src={imgsrc} alt="products" />
          </div>
          <div>Price: {props.price}</div>
          <button type="button" className="btn btn-info">
            Add to Cart
          </button>
        </ul>
      </Fragment>
    );
};

export default ProductList;
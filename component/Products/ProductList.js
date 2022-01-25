import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import "./ProductList.css";

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
      cartCtx.addItem({
        id: props.id,
        title: props.title,
        img: props.imageUrl,
        price: props.price,
        amount: 1,
      });
    }
  const imgsrc = props.img;
  return (
    <div className="container prod">
      <div className="row">
        <div className="col">
          <h3>Title:</h3>
          {" " + props.title}
        </div>
        <div className="col">
          <img src={imgsrc} alt="products" className="img" />
        </div>
        <div className="col">
          <h3>Price:</h3>
          {" " + props.price}
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-info btn-sm addcart"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

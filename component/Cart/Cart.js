import Modal from "./Modal";
import './Cart.css';
import CartItems from "./CartItems";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";





const Cart = props => {
    const cartCtx = useContext(CartContext);
    const quantity = 1;
    const cartList = cartCtx.items.map((list) => <CartItems item={list.title} img={list.imageUrl} price={list.price} amount={quantity}/>);

    const messageHandler = () => {
        if(cartList.length !== 0){
            alert('ThankYou For Purchasing !')
        }else{
            alert('Please Add Items To Cart !')
        }
    }

    return (
      <Modal>
        <div className="cart">
          <h3 className="cartName">
            Cart
            <button className="btn btn-primary X" onClick={props.onClick}>
              X
            </button>
          </h3>
          <div className="container">
            <div className="row Header">
              <div className="col">
                <span>Item</span>
              </div>
              <div className="col">
                <span>Price</span>
              </div>
              <div className="col">
                <span>Amount</span>
              </div>
            </div>
          </div>
          <div>{cartList}</div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary purchase" onClick={messageHandler}>Purchase</button>
            </div>
          </div>
        </div>
      </Modal>
    );
};

export default Cart;
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
    items: []
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedList = state.items.concat(action.item);
        return{
            items: updatedList
        }
    }
    return defaultCart;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCart);


    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        addItem: addItemHandler,
        removeItem: removeItemHandler 
    };
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
}

export default CartProvider;
import React from "react";

const CartValue = React.createContext({
    items: [],
    totalPrice: 0,
    addItem: (item) => { },
    removeItem:(id)=>{}
});

export default CartValue;
import React from "react";

const CardContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    updateItem: (id, item) => {},
    removeItem: (id) => {},
});

export default CardContext;

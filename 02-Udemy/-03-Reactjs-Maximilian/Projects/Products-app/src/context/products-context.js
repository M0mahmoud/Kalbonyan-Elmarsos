import React, { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  const toggleFav = (productId) => {
    setProductsList((cur) => {
      const prodIndex = cur.findIndex((p) => p.id === productId);

      const newFavStatus = !cur[prodIndex].isFavorite;
      const updatedProducts = [...cur];
      updatedProducts[prodIndex] = {
        ...cur[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFav }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

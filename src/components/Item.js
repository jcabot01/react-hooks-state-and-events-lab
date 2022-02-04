import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function addHandler() {
    setIsInCart((isInCart) => !isInCart)
  }

  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addHandler} >{ isInCart ? "Remove from" : "Add to" } Cart</button>
    </li>
  );
}

export default Item;

import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");  //intial State is "Filter by Category", but use <option> "value" name = "All"

  function selectHandler(event) {
    setSelectedCategory(event.target.value) //set State to this item's value, returns category; "Produce", etc..
  }

  const itemsToDisplay = items.filter((item) => {
      if(selectedCategory === "All") { //if the current State = "Filter by Categoy", then return that
        return true;
      } else {
        return item.category === selectedCategory //otherwise, return the category of the selected item.  The filter does this for each item matching that category.
      };
  });
  //map below renders the category filter to the page, displaying each item with their props.
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectHandler} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

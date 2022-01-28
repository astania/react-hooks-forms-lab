import React from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ itemName, itemCategory, onItemFormSubmit, onItemChange, onItemCategoryChange }) {

  function handleItemFormSubmit(event) {
    event.preventDefault()
    const newItem = {
        id: uuid(), 
        name: event.target.itemName,
        category: event.target.itemCategory,
      }
    return newItem
  }
 

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label >
        Name:
        <input type="text" name="name" value={itemName} onChange={onItemChange} />
      </label>

      <label >
        Category:
        <select name="category" value={itemCategory} onChange={onItemCategoryChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

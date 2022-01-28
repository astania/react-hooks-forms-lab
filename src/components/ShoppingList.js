import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchTerm] = useState("")
  const [addedItem, setAddedItem] = useState({
    itemName: "",
    itemCategory: "Produce"
  })

  function handleItemNameChange(event) {
    setAddedItem({
      ...addedItem,
      itemName: event.target.value
    }
    )
  }

  function handleItemCategoryChange(event) {
    setAddedItem({
      ...addedItem,
      itemCategory: event.target.value
    })
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value)
  }
  const filteredItemsToDisplay = items.filter((item) => {
    return item.name.includes(search)
  })

  function handleItemFormSubmit(event) {
    event.preventDefault()



  }


  const itemsToDisplay = filteredItemsToDisplay.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        itemName={addedItem.itemName}
        itemCategory={addedItem.itemCategory}
        onItemChange={handleItemNameChange}
        onItemCategoryChange={handleItemCategoryChange}
        onItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

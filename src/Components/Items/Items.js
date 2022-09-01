import React from "react";
import "./Items.css";

const Items = (props) => {
  const { items, deleteItem } = props;
  let lengthItems = items.length;
  // console.log(items);
  const ListItem = lengthItems ? (
    items.map((item) => {
      return (
        <div className="list-data" key={item.id}>
          <span className="id">{item.id}</span>
          <span>|</span>
          <span>{item.name}</span>
          <span>|</span>
          <span>{item.age}</span>
          <span>|</span>
          <span>{item.number}</span>
          <span>|</span>
          <span className="delete-item" onClick={() => deleteItem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    // Show Empty Message
    <div className="empty-msg">Not Items!</div>
  );

  return (
    <div className="list-items">
      <div className="titles">
        <span>ID</span>
        <span>|</span>
        <span>Name</span>
        <span>|</span>
        <span>Age</span>
        <span>|</span>
        <span>Number</span>
        <span>|</span>
        <span>Delete</span>
      </div>
      <div>{ListItem}</div>
    </div>
  );
};

export default Items;

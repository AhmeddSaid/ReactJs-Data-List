import React, { Component } from "react";
import "./App.css";
import Items from "./Components/Items/Items";
import AddItem from "./Components/AddItem/AddItem";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Ahmed", age: 25, number: 123456789 },
      { id: 2, name: "Osama", age: 31, number: 123456789 },
      { id: 3, name: "Mohamed", age: 27, number: 123456789 },
    ],
  };

  // delete Item function
  deleteItem = (id) => {
    //! method 1
    /* let updateItems = this.state.items;
    let i = updateItems.findIndex((item) => item.id === id);
    updateItems.splice(i, 1);
    this.setState({ items : updateItems }); */
    //! method 2
    let updateItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: updateItems });
  };

  // add Item Function
  addItem = (item) => {
    console.log(item.id);
    let items = this.state.items;
    item.id = items[items.length - 1].id + 1; // -1 to convert it to number?
    console.log(items);
    console.log(items.length);
    items.push(item);
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="header">Data List</h1>
        <Items items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;

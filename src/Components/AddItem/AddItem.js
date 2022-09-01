import React, { Component } from "react";
import "./AddItem.css";

class AddItems extends Component {
  state = {
    id: this.props.id,
    name: "",
    age: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    // prevent refresh on submit
    e.preventDefault();

    // console.log(this.state);
    if (e.target.name.value !== "" && e.target.age.value !== "" && e.target.number.value !== "") {
      this.props.addItem(this.state);

      this.setState({
        name: "",
        age: "",
        number: "",
      });
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="input">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter Name" id="name" onChange={this.handleChange} value={this.state.name} />
          <input type="number" placeholder="Enter Age" id="age" onChange={this.handleChange} value={this.state.age} />
          <input
            type="tel"
            placeholder="Enter Number"
            id="number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <input className="submit" type="submit" value="Add" />
        </form>
        <div>{this.state.item}</div>
      </div>
    );
  }
}

export default AddItems;

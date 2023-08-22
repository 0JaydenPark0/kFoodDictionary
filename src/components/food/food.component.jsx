import { Component } from "react";

import "./food.styles.css";

class Food extends Component {
  render() {
    const { name, id, details } = this.props.koreanfood;

    return (
      <div className="food-container" key={id}>
        <img
          alt={`koreanfood ${name}`}
          src={`https://github.com/0JaydenPark0/koreanfoodDB/blob/main/images/${id}.jpg?raw=true`}
        />
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
    );
  }
}

export default Food;

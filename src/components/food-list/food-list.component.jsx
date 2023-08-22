import { Component } from "react";
import Food from "../food/food.component";

import "./food-list.styles.css";

class FoodList extends Component {
  render() {
    const { koreanfoods } = this.props;

    return (
      <div className="food-list">
        {koreanfoods.map((koreanfood) => {
          return <Food koreanfood={koreanfood} />;
        })}
      </div>
    );
  }
}

export default FoodList;

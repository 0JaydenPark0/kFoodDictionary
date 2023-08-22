import { Component } from "react";

import FoodList from "./components/food-list/food-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      koreanfoods: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/0JaydenPark0/koreanfoodJSON/main/db.json"
    )
      .then((response) => response.json())
      .then((foods) =>
        this.setState(() => {
          return { koreanfoods: foods };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { koreanfoods, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredKoreanfoods = koreanfoods.filter((koreanfood) => {
      return koreanfood.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">K-Food Dictionary</h1>
        <SearchBox
          className="kfoods-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search Korean foods"
        />
        <FoodList koreanfoods={filteredKoreanfoods} />
      </div>
    );
  }
}

export default App;

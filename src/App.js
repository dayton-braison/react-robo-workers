import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      roboWorkers: [],
      searchField: "",
    };
  }

  // use for fetch api data
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { roboWorkers: users };
        })
      );
  }
  // detect when input value changes
  // converts inputs to lowercase to make case insensitive
  onSearchChange = (event) => {
    let searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // filters names by what is typed in search box
    let filteredRoboWorkers = this.state.roboWorkers.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Robo-Workers</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={this.onSearchChange}
          placeholder="Search robots...."
        />
        <CardList roboWorkers={filteredRoboWorkers} />
      </div>
    );
  }
}

export default App;

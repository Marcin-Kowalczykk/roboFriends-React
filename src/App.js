import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }
  onChangeSearchInput = (event) => {
    this.setState({ searchField: event.target.value });

    console.log(event.target.value);
  };
  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <main className="tc">
        <header className="tc">
          <h1>Robo Friends App</h1>
          <SearchBox changeSearchInput={this.onChangeSearchInput} />
        </header>
        <section>
          <CardList robots={filterRobots} />;
        </section>
      </main>
    );
  }
}

export default App;

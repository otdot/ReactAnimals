import React, { Component } from "react";
import "./App.css";
import AnimalCard from "./components/AnimalCard";
import animals from "./animals.js";

class App extends Component {
  state = { animals };
  count = 0;
  render() {
    const animalsList = this.state.animals.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          imgsrc={`http://source.unsplash.com/${animal.name}`}
          name={animal.name}
          count={animal.likes}
        />
      );
    });
    return <div className="container">{animalsList}</div>;
  }
}

export default App;

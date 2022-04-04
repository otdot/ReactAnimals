import React, { Component } from "react";
import "./App.css";
import AnimalCard from "./components/AnimalCard";
import { animals } from "./animals.js";

class App extends Component {
  state = { animals: animals };

  addLike = (name) => {
    const updatedArr = this.state.animals.map((animal) => {
      if (name === animal.name) {
        animal.likes++;
      } else return animal;
    });
    return this.setState(updatedArr);
  };

  deleteCard = (name) => {
    const updatedArr = this.state.animals.filter(
      (animal) => name !== animal.name
    );
    return this.setState({ animals: updatedArr });

    //tai

    // this.setState((state) => {
    //   const updatedArr = this.state.animals.filter(
    //     (animal) => name !== animal.name
    //   );
    //   return { animals: updatedArr };
    // });
  };

  render() {
    const animalsList = this.state.animals.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          imgsrc={`http://source.unsplash.com/170x270/?animal/${animal.name}`}
          name={animal.name}
          count={animal.likes}
          func={() => this.addLike(animal.name)}
          func2={() => this.deleteCard(animal.name)}
        />
      );
    });

    return <div className="container">{animalsList}</div>;
  }
}

export default App;

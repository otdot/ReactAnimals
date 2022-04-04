import React, { Component } from "react";
import "./App.css";
import AnimalCard from "./components/AnimalCard";
import { animals } from "./animals.js";

class App extends Component {
  state = { animals: animals };

  addLikeHandler = (e, name) => {
    e.preventDefault();
    // this.setState((state) => {
    //   const updatedArr = state.animals.map((animal) => {
    //     if (name === animal.name) {
    //       return { ...animal, likes: animal.likes + 1 };
    //     } else return animal;
    //   });
    //   return { animals: updatedArr };
    // });

    // or

    const updatedArr = this.state.animals.map((animal) => {
      if (name === animal.name) {
        animal.likes++;
        e.currentTarget.nextElementSibling.classList.add("thumb");
      } else return animal;
    });
    return this.setState(updatedArr);
  };

  deleteHandler = (name) => {
    const updatedArr = this.state.animals.filter(
      (animal) => name !== animal.name
    );
    return this.setState({ animals: updatedArr });

    //or

    // this.setState((state) => {
    //   const updatedArr = state.animals.filter(
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
          func={(e) => this.addLikeHandler(e, animal.name)}
          func2={() => this.deleteHandler(animal.name)}
        />
      );
    });

    return <div className="container">{animalsList}</div>;
  }
}

export default App;

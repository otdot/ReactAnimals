import React, { Component } from "react";
import "./App.css";
import AnimalCard from "./components/AnimalCard";
import { animals } from "./animals.js";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

class App extends Component {
  state = { animals: animals, search: "" };

  searchHandler = (e) => {
    console.log({ search: e.target.value });
    this.setState({ search: e.target.value });
  };

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
        const thumbparagraph = e.currentTarget.nextElementSibling;
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

  resetThumbClasses = () => {
    setTimeout(() => {
      document
        .querySelectorAll(".thumbparagraph")
        .forEach((thumb) => (thumb.classList = "thumbparagraph"));
    }, 1000);
  };

  render() {
    this.resetThumbClasses();
    const filteredAnimalsList = this.state.animals.filter((animal) =>
      animal.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const animalsList = filteredAnimalsList.map((animal) => {
      return (
        <AnimalCard
          searchterm={this.state.search}
          key={animal.name}
          imgsrc={`http://source.unsplash.com/170x270/?animal/${animal.name}`}
          name={animal.name}
          count={animal.likes}
          func={(e) => this.addLikeHandler(e, animal.name)}
          func2={() => this.deleteHandler(animal.name)}
        />
      );
    });

    return (
      <div>
        <Header
          animalcount={
            this.state.search ? animalsList.length : this.state.animals.length
          }
          change={this.searchHandler}
        />
        <div className="container">{animalsList}</div>
        <Footer />
      </div>
    );
  }
}

export default App;

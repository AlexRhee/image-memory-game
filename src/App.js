import React, { Component } from 'react';
// import logo from './logo.svg';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import images from "./images.json";
import './App.css';

var score = 0;

const clicked = [];

Array.prototype.shuffle = function() {
  var input = this;
   
  for (var i = input.length-1; i >=0; i--) {
   
      var randomIndex = Math.floor(Math.random()*(i+1)); 
      var itemAtIndex = input[randomIndex]; 
       
      input[randomIndex] = input[i]; 
      input[i] = itemAtIndex;
  }
  return input;
}


class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score,
    clicked
  };

  

  clickImage = id => {
    // Filter this.state.images for images with an id not equal to the id being removed
    const imagesRandom = this.state.images.shuffle();
    const images = imagesRandom.map(img => img);
    let clicked = this.state.clicked
    let score = this.state.score;

    if (this.state.clicked.indexOf(id) > 0) {
      alert("You already clicked that logo, try again!")
      score = 0;
      clicked = [];
    }
    else {
      score++
      clicked.push(id);
    }

    // Set this.state.images equal to the new images array
    this.setState({ images });
    this.setState({ clicked });
    this.setState({ score });
  };

  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} />
        <Title>NBA Team Logos</Title>
        {this.state.images.map(img => (
          <ImageCard
            clickImage={this.clickImage}
            id={img.id}
            key={img.id}
            name={img.name}
            image={img.image}
            city={img.city}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

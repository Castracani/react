import React, { Component } from 'react';
import ImageCards from "./components/ImageCards";
import images from "./images.json";
import './App.css';

class App extends Component {

  state={
    message: "Start the game by clicking an image!",
    images: images,
    freshBird: images,
    score: 0,
    highScore: 0
  }


  cardShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  };

  cardChoice = (alt) => {
    const chooseBird = this.state.freshBird.find(item => item.alt === alt);

    // choosing new card logic
    if (chooseBird !== undefined) {
      const newBird = this.state.freshBird.filter(item => item.alt !== alt);
      this.setState({
        message: "Good Guess! +1 for you",
        score: this.state.score + 1,
        images: images,
        freshBird: newBird
      });
    } else {
      this.setState({
        message: "Oh no, wrong guess!",
        score: 0,
       highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
       images: images,
       freshBird: images
      });
    }
    this.cardShuffle(images);
  };
  

  render() {
    return (
      <main>
        <div className="grid">
          <div id="leftBox">
            <div id="boxA">Click on one of the birds to earn points. You win the game by clicking all 12 images only one time. Selecting the same image twice resets the game. I hope your memory is good!</div>
            
            <div id="boxB">{this.state.message} <br />Score: {this.state.score} | Top Score: {this.state.highScore}</div>
          </div>
          <div id="rightBox">
            {this.state.images.map(card => (
              <ImageCards 
                id={card.id}
                key={card.id}
                image={card.image}
                alt={card.alt}
                cardChoice={this.cardChoice}

              />
            ))}

          </div>
        </div>
      </main>
    );
  }
}

export default App;

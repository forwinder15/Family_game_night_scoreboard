import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './addPlayerForm'


class App extends Component {
  state = {
    players: [
      {
        name: "John",
        score: 0,
        id: 1
      },
      {
        name: "Ashly",
        score: 0,
        id: 2
      },
      {
        name: "JT",
        score: 0,
        id: 3
      },
      {
        name: "Madi",
        score: 0,
        id: 4
      }
    ]
  };

//change score
handleScore = (index, delta) => {
   this.setState( prevState => ({
     score: prevState.players[index].score += delta
   }))
  }

  getHighScore = () => {
  const scores = this.state.players.map( p => p.score );
  const highScore = Math.max(...scores);
  if (highScore) {
    return highScore;
  }
  return null;
}

//player ID Counter
prevPlayerId = 4;


handleAddPlayer = (name) =>{
  this.setState( prevState => {
    return{
    players: [
      ...prevState.players,
      {
        name,
        score: 0,
        id: this.prevPlayerId += 1
      }
     ]
   }
  });
}

//remove player
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {

  const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header
          title="Family Game Night Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScore}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Header from './components/Header'
import Player from './components/Player'
import AddPlayer from './components/AddPlayer'
import './App.css';

class App extends React.Component {
	state = {
		players: []
  };
  
  handleAddPlayer = (player) => {
    let playerId = this.state.players.length
    player.id = ++playerId
    const players = [...this.state.players, player]
    this.setState({
      players
    })

  }

	handleRemovePlayer = (id) => {
		this.setState ( prevState => ({
			players: prevState.players.filter( p => p.id !== id) 
		}));
	};
	render() {
		return (
			<div className="scoreboard">
				<Header 
					title="Scoreboard"
					totalPlayers={this.state.players.length}
				/>
				{this.state.players.map( player => 			
					<Player 
						key={player.id.toString()}
						id={player.id}
						name={player.name}
						removePlayer={this.handleRemovePlayer}
					/>
				)}
        <AddPlayer addPlayer={this.handleAddPlayer}/>
			</div>
	);
	}
}

export default App;

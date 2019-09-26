import React from 'react';
import Header from './Header'
import Player from './Player'
import './App.css';

class App extends React.Component {
	state = {
		players: [
		{
			id: '1',
			name: 'Galgallo'
		},
		{
			id: '2',
			name: 'Wako'
		},	
		]
	};

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
			</div>
	);
	}
}

export default App;

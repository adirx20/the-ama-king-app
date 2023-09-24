import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Betting() {
    const [upcomingGames, setUpcomingGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [homeTeamScore, setHomeTeamScore] = useState('');
    const [awayTeamScore, setAwayTeamScore] = useState('');

    const apiUrl = 'API_URL';

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((res) => {
                // Assuming the API response contains an array of upcoming games
                const gamesData = res.data;
                setUpcomingGames(gamesData);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }, [apiUrl]);

    // Function to handle when the user selects a game to predict
    const handleGameSelect = (game) => {
        setSelectedGame(game);
    };

    // Function to handle when the user predicts scores
    const handlePredictScores = () => {
        // Ensure the user has selected a game and entered valid scores
        if (
            selectedGame
            && homeTeamScore.trim() !== ''
            && awayTeamScore.trim() !== ''
        ) {
            // TODO: Implement logic to record user predictions
            // You can store the predictions in your frontend state or context API for now
            const userPredictions = {
                gameId: selectedGame.id,
                homeTeamScore: parseInt(homeTeamScore),
                awayTeamScore: parseInt(awayTeamScore),
            };

            // You may want to update the state with the user's prediction
            // Example: updateUserPredictions(userPrediction);

            // Clear the selected game and predicted scores
            setSelectedGame(null);
            setHomeTeamScore('');
            setAwayTeamScore('');
        } else {
            // Display an error message to the user if the input is invalid
            alert('Please select a game and predict scores for both teams.');
        }
    };

    return (
        <div>
            <h2>Upcoming Games</h2>
            <ul>
                {upcomingGames.map((game) => (
                    <li key={game.id}>
                        <p>Teams: {game.teams}</p>
                        <p>Match Date: {game.matchDate}</p>
                        <button onClick={() => handleGameSelect(game)}>Predict Scores</button>
                    </li>
                ))}
            </ul>

            {selectedGame && (
                <div>
                    <h3>Predict Scores</h3>
                    <p>Selected Game: {selectedGame.teams}</p>
                    <input
                        type="number"
                        placeholder="Home Team Score"
                        value={homeTeamScore}
                        onChange={(e) => setHomeTeamScore(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Away Team Score"
                        value={awayTeamScore}
                        onChange={(e) => setAwayTeamScore(e.target.value)}
                    />
                    <button onClick={handlePredictScores}>Predict</button>
                </div>
            )}
        </div>
    );
}

export default Betting;
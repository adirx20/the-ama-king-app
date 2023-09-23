import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Betting() {
    const [upcomingGames, setUpcomingGames] = useState([]);
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

    return (
        <div>
            <h2>Upcoming Games</h2>
            <ul>
                {upcomingGames.map((game) => (
                    <li key={game.id}>
                        {/* Display game details, e.g., teams, match date */}
                        <p>
                            Teams: {game.teams}
                        </p>
                        <p>
                            Match Date: {game.matchDate}
                        </p>
                        {/* Add more details as needed later */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Betting;
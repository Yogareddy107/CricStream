import React, { useEffect, useState } from "react";

function LiveScores() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:5000");

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMatches(data.matches || []);
        };

        return () => ws.close();
    }, []);

    return (
        <div className="container mt-3">
            <h2>Live IPL Scores</h2>
            <ul className="list-group">
                {matches.length > 0 ? matches.map((match, index) => (
                    <li key={index} className="list-group-item">
                        <h5>{match.name}</h5>
                        <p>{match.status}</p>
                    </li>
                )) : <p>No live matches available.</p>}
            </ul>
        </div>
    );
}

export default LiveScores;

// src/MatchCard.js

import React from "react";

function MatchCard({ match, onClick }) {
    return (
        <div className="card my-2 shadow-sm" onClick={() => onClick(match)} style={{ cursor: "pointer" }}>
            <div className={`card-header ${match.matchStatus === "Live" ? "bg-danger text-white" : "bg-primary text-white"}`}>
                {match.matchStatus} - {match.date} | {match.time}
            </div>
            <div className="card-body">
                <h5 className="card-title">{match.home} vs {match.away}</h5>
                <p className="card-text"><strong>Venue:</strong> {match.venue}</p>

                {match.liveScore ? (
                    <p className="text-success">
                        {match.homeScore} vs {match.awayScore} <br />
                        <strong>{match.liveScore.winner}</strong>
                    </p>
                ) : (
                    <p className="text-muted">Match not started</p>
                )}
            </div>
        </div>
    );
}

export default MatchCard;

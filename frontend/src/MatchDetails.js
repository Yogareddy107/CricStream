// src/MatchDetails.js

import React from "react";

function MatchDetails({ match, onClose }) {
    return (
        <div className="modal show d-block bg-dark bg-opacity-75">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {match.home} vs {match.away} - {match.date}
                        </h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p><strong>Venue:</strong> {match.venue}</p>
                        <p><strong>Match Status:</strong> {match.matchStatus}</p>

                        {match.liveScore ? (
                            <>
                                <h4 className="text-success">Live Score:</h4>
                                <p><strong>{match.home}:</strong> {match.liveScore.homeScore}</p>
                                <p><strong>{match.away}:</strong> {match.liveScore.awayScore}</p>
                                <p><strong>Result:</strong> {match.liveScore.winner}</p>
                            </>
                        ) : (
                            <p className="text-muted">Live score not available yet.</p>
                        )}

                        {match.matchStats && (
                            <>
                                <h4>Match Stats:</h4>
                                <p><strong>Toss Winner:</strong> {match.matchStats.tossWinner}</p>
                                <p><strong>Top Scorer:</strong> {match.matchStats.topScorer}</p>
                                <p><strong>Best Bowler:</strong> {match.matchStats.bestBowler}</p>
                                <p><strong>Summary:</strong> {match.matchStats.matchSummary}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchDetails;

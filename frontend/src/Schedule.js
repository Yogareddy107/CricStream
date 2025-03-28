// src/Schedule.js

import React, { useState } from "react";
import iplSchedule from "./iplSchedule";
import MatchCard from "./MatchCard";
import MatchDetails from "./MatchDetails";

function Schedule() {
    const [selectedMatch, setSelectedMatch] = useState(null);

    return (
        <div className="container">
            <h2 className="text-center mb-3">IPL 2025 Schedule</h2>

            <div className="row">
                {iplSchedule.map((match) => (
                    <div key={match.matchId} className="col-md-6 col-lg-4 mb-3">
                        <MatchCard match={match} onClick={setSelectedMatch} />
                    </div>
                ))}
            </div>

            {selectedMatch && <MatchDetails match={selectedMatch} onClose={() => setSelectedMatch(null)} />}
        </div>
    );
}

export default Schedule;

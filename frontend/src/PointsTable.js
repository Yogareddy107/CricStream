// src/PointsTable.js

import React from "react";

const teams = [
    { name: "Royal Challengers Bengaluru", matches: 1, wins: 1, losses: 0, points: 2, nrr: "+2.137", color: "#DA1818", logo: "🔴" },
    { name: "Lucknow Super Giants", matches: 2, wins: 1, losses: 1, points: 2, nrr: "+0.963", color: "#005BAB", logo: "🦅" },
    { name: "Punjab Kings", matches: 1, wins: 1, losses: 0, points: 2, nrr: "+0.550", color: "#D71920", logo: "🦁" },
    { name: "Chennai Super Kings", matches: 1, wins: 1, losses: 0, points: 2, nrr: "+0.493", color: "#F7D720", logo: "🦁" },
    { name: "Delhi Capitals", matches: 1, wins: 1, losses: 0, points: 2, nrr: "+0.371", color: "#17449B", logo: "🏛️" },
    { name: "Sunrisers Hyderabad", matches: 2, wins: 1, losses: 1, points: 2, nrr: "-0.128", color: "#F26522", logo: "☀️" },
    { name: "Kolkata Knight Riders", matches: 2, wins: 1, losses: 1, points: 2, nrr: "-0.308", color: "#3A225D", logo: "🟣" },
    { name: "Mumbai Indians", matches: 1, wins: 0, losses: 1, points: 0, nrr: "-0.493", color: "#045093", logo: "🔵" },
    { name: "Gujarat Titans", matches: 1, wins: 0, losses: 1, points: 0, nrr: "-0.550", color: "#CBA135", logo: "⚡" },
    { name: "Rajasthan Royals", matches: 2, wins: 0, losses: 2, points: 0, nrr: "-1.882", color: "#E61C81", logo: "👑" },
];

function PointsTable() {
    return (
        <div className="container">
            <h2 className="text-center mb-3">IPL 2025 Points Table</h2>
            <table className="table table-bordered table-striped">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Points</th>
                        <th>NRR</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td style={{ color: team.color, fontWeight: "bold" }}>
                                {team.logo} {team.name}
                            </td>
                            <td>{team.matches}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                            <td>{team.points}</td>
                            <td>{team.nrr}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PointsTable;

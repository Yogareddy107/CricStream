import React, { useState } from "react";
import Schedule from "./Schedule";
import PointsTable from "./PointsTable";
import LiveVideo from "./LiveVideo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [showFullScore, setShowFullScore] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Today's Live Match Data
    const todayMatch = {
        team1: "Gujarat Titans",
        team2: "Mumbai Indians",
        score1: "-- (20 overs)",
        score2: "-- (20 overs)",
        status: "UPCOMMING",
    };

    // IPL Schedule Data
    const matches = [
        { team1: "Chennai Super Kings", team2: "Royal Challengers Bangalore", date: "April 5, 2025", venue: "Chennai" },
        { team1: "Mumbai Indians", team2: "Delhi Capitals", date: "April 7, 2025", venue: "Mumbai" },
        { team1: "Kolkata Knight Riders", team2: "Sunrisers Hyderabad", date: "April 9, 2025", venue: "Kolkata" },
    ];

    // Filtering Search Results Dynamically
    const filteredMatches = matches.filter(
        (m) =>
            m.team1.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.team2.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container-fluid p-0" style={{ background: "#F0F0F0", color: "#000" }}>
            {/* Header Section */}
            <nav className="d-flex justify-content-between align-items-center p-3" style={{ background: "#003366", color: "#FFFFFF" }}>
                <h2 className="m-0">CricStream</h2>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control me-2"
                        style={{ width: "250px", background: "#FFFFFF", color: "#000", border: "1px solid #ccc" }}
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn" style={{ background: "#FF0000", color: "#FFFFFF" }}>🔍 Search</button>
                    <button className="btn btn-outline-light ms-2" onClick={() => setMenuOpen(!menuOpen)}>☰ Menu</button>
                </div>
            </nav>

            {/* Dropdown Menu */}
            {menuOpen && (
                <div className="p-3" style={{ background: "#008080", color: "#FFFFFF" }}>
                    <p className="m-0" onClick={() => setSelectedTab("schedule")}>📅 Schedule</p>
                    <p className="m-0" onClick={() => setSelectedTab("points")}>📊 Points Table</p>
                </div>
            )}

            {/* Live Video Section */}
            <div className="text-center p-3" style={{ background: "#F0F0F0" }}>
                <LiveVideo />
            </div>

            {/* Today's Match Score Card */}
            <div className="container mt-4">
                <div 
                    className="card text-white" 
                    style={{ background: "#006400", borderRadius: "10px", cursor: "pointer" }}
                    onClick={() => setShowFullScore(!showFullScore)}
                >
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="m-0">🏏 Today’s Match</h5>
                        {todayMatch.status === "LIVE" && <span className="badge" style={{ background: "#FF0000" }}>LIVE 🔴</span>}
                    </div>
                    <div className="card-body text-center">
                        <h5>{todayMatch.team1} vs {todayMatch.team2}</h5>
                        {showFullScore && (
                            <>
                                <p>{todayMatch.team1}: <strong>{todayMatch.score1}</strong></p>
                                <p>{todayMatch.team2}: <strong>{todayMatch.score2}</strong></p>
                            </>
                        )}
                    </div>
                </div>
            </div>

           {/* Search Result Section */} 
<div className="container mt-4">
    {searchQuery && (
        <div className="card p-3 bg-light text-dark">
            <h5>Search Results:</h5>
            {filteredMatches.length > 0 ? (
                filteredMatches.map((match, index) => (
                    <p key={index} style={{ background: "#003366", color: "#FFFFFF", padding: "10px", borderRadius: "5px" }}>
                        {match.team1} vs {match.team2} - {match.date} at {match.venue}
                    </p>
                ))
            ) : (
                <p>No matches found</p>
            )}
        </div>
    )}
</div>


            {/* Dynamic Content (Schedule / Points Table) */}
            <div className="container mt-4">
                {selectedTab === "schedule" && <Schedule />}
                {selectedTab === "points" && <PointsTable />}
            </div>
        </div>
    );
}

export default App;

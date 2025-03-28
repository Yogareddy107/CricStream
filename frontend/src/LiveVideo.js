import React from "react";

function LiveVideo() {
    return (
        <div className="text-center">
            <h3>Watch IPL Match 👇🔴Live at 7:30PM</h3>
            <iframe 
                width="100%" 
                height="500px" 
                src="https://criccoder264.pages.dev/S18"
                title="Live IPL"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default LiveVideo;

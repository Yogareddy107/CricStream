import React from "react";

function LiveVideo() {
    return (
        <div className="text-center">
            <h3>Watch IPL Match 👇🔴Live </h3>
            <iframe 
                width="100%" 
                height="800px" 
                src="https://criccoder264.pages.dev/Willow3"
                title="Live IPL"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default LiveVideo;

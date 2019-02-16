import React from 'react';
import './video-player-control.css';
function VideoPlayerControl(props) {
    return (
        <div className="VideoPlayerControl">
            {props.children}
        </div>
    );
}

export default VideoPlayerControl;
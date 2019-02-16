import React, { Component } from 'react';
import './video.css';
class Video extends Component {

    togglePlay = () => {
        if (this.props.pause) {
            this.video.pause();
        } else {
            this.video.play();
        }
    }
    setRefAccion = (element) => {
        this.video = element
    }

    componentDidUpdate(nextProps) {
        if (nextProps.pause != this.props.pause) {
            this.togglePlay();
        }
    }
    render() {
        return (
            <div className="Video">
                <video autoPlay={this.props.autoPlay}
                   src={this.props.src} ref={this.setRefAccion} 
                   onLoadedMetadata={this.props.handleLoadmetada}
                   onTimeUpdate={this.props.onTimeUpdate}
                   onSeeked={this.props.handleSeekend}
                   onSeeking={this.props.handleSeeking}
                >
                </video>
            </div>
        );
    }
}

export default Video;
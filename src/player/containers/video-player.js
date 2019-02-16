import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/Timer';
import VideoPlayerControl from '../components/video-player-control';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
    state = {
        pause: false,
        duration: 0,
        currentTime: 0,
        loading: false
    }
    
    handlePause = () => {
        this.setState({
            pause: !this.state.pause
        });
    }

    componentDidMount() {
        this.setState({
            pause: !this.props.autoPlay
        });
    }

    handleLoadmetada = (event) => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration 
        })
    }

    handleSeeking = (event) => {
        this.setState({
            loading: true
        });
    }

    handleSeeked = (event) => {
        this.setState({
            loading: false
        });
    }

    handleTimeUpdate = (event) => {
        this.setState({
            currentTime: this.video.currentTime
        });

        if (this.video.currentTime == this.video.duration) {
            this.setState({
                pause: !this.state.pause
            });
        }
    }

    handleProgressChanged = (event) => {
        this.video.currentTime = event.target.value;
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleVolumenChange = (event) => {
        this.video.volume = event.target.value 
    }

    handeClickFullScreen = (event) => {
        if(!document.webkitIsFullScreen){
            this.videoPlayer.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen();
        }
    }

    setRefFullScreen = (element) => {
        this.videoPlayer = element;
    }
    render() { 
        return (
            <VideoPlayerLayout setRef={this.setRefFullScreen}>
                <Title title={this.props.title}/>
                <VideoPlayerControl>
                    <PlayPause handleClick={this.handlePause} pause={this.state.pause}/>
                    <Timer duration={this.state.duration} currentTime={this.state.currentTime}/>
                    <ProgressBar value={this.state.currentTime} max={this.state.duration} handleProgressChanged={this.handleProgressChanged}/>
                    <Volume handleChange={this.handleVolumenChange}/>
                    <FullScreen handeClick={this.handeClickFullScreen}/>
                </VideoPlayerControl>
                <Spinner loading={this.state.loading}/>
                <Video src={this.props.urlVideo} autoPlay={this.props.autoPlay}
                       pause={this.state.pause} 
                       handleLoadmetada={this.handleLoadmetada}
                       onTimeUpdate={this.handleTimeUpdate}
                       handleSeeked={this.handleSeeked}
                       handleSeeking={this.handleSeeking}/>
            </VideoPlayerLayout>
        );
    }
}

export default VideoPlayer;

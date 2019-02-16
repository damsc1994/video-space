import React from 'react';
import './timer.css';

function numberPath(number) {
    const path = '00';
    const result = path.substring(0, path.length - number.length) + number;
    return `${result}`;
}
function formatted(time) {
    const minute = parseInt(time / 60, 10);
    const second = parseInt(time % 60, 10);
    return `${numberPath(minute.toString())}:${numberPath(second.toString())}`;
}
function Timer(props) {
    return (
        <div className="Timer">
          <span>{ formatted(props.currentTime) } / { formatted(props.duration) }</span>
        </div>
    )
}

export default Timer;
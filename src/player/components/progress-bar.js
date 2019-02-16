import React from 'react';

function ProgressBar(props) {
    return (
        <div>
            <input
              type="range"
              min={0}
              max={props.max}
              value={props.value}
              onChange={props.handleProgressChanged}
            />
        </div>
    );
}

export default ProgressBar;
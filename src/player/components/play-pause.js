import React from 'react';
function PlayPause(props) {
    return (
        <div>
            {
                props.pause ?
                    <button onClick={props.handleClick}>
                    >
                    </button>
                :
                    <button onClick={props.handleClick}>
                    ||
                    </button>
            }
            
            
        </div>
    )
}

export default PlayPause;
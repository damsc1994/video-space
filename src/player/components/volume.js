import React from 'react';
import './volume.css';
function Volume(props) {
    return (
        <div className="Volume">
            <button>
                v
                <div className="Volume-range">
                    <input 
                     type="range"
                     min="0"
                     max="1"
                     step=".05"
                     onChange={props.handleChange}
                    />
                </div>
            </button>
        </div>
    );
}

export default Volume;
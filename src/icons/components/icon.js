import React from 'react';

function Icon(props) {
    return (
        <svg varsion="1.1" xmlns="http://www.w3.org/2000/svg" 
         width={props.width} height={props.height} fill={props.color} viewBox="0 0 32 32">
          {props.children}
        </svg>
    )
}

export default Icon;

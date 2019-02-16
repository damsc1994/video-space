import React from 'react'
import Icon from './icon'

function Pause(props) {
    return (
        <Icon {... props}>
            <path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/>
        </Icon>
    )
}

export default Pause;
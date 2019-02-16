import React from 'react';

function Spinner(props) {
    if (!props.loading) return null;
    return (
        <div>
            <span>Cargando...</span>
        </div>
    )
}

export default Spinner;
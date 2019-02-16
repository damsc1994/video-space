import React, { Component } from 'react';

class HandleError extends Component {
    state = {
        handleError: false
    };
    componentDidCatch(err, inf){
        this.setState({
            handleError: true
        })
    }

    render() {
        if (this.state.handleError) return (
            <div>
                <h2>Ha ocurrido un error</h2>
            </div>
        )
        
        return this.props.children;
    }
}

export default HandleError;
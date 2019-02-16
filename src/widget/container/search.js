import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
    state = {
        value: ''
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value.replace(' ', '-')
        });
    }

    setInput = (element) => {
        this.input = element;
    }
    render() {
        return (
            <Search 
                handleSubmit={this.handleSubmit} 
                setInput={this.setInput}
                handleChange={this.handleChange}
                value={this.state.value}/>
        )
    }
}

export default SearchContainer;
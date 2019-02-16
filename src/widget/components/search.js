import React from 'react';
import './search.css'
function Search(props) {
    return (
        <form className="Search" onSubmit={props.handleSubmit}> 
            <input ref={props.setInput} 
                   type="text" className="Search-input" 
                   placeholder="busca tu video..."
                   value={props.value}
                   onChange={props.handleChange}/>
        </form>
    )
}

export default Search;
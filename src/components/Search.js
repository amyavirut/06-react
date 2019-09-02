import React from 'react'
import '../styles/Search.css'

class Search extends React.Component {
    // Handles onInput events from the search field
    // Extracts the searchTerm from the form value and calls updateSearchTerm to update
    // state in the parent Places component
    handelInput = (event) => {
        this.props.updateSearchTerm(event.target.value)
    }

    render() {
        return (
            <input onInput={this.handelInput} type='text'></input>
        )
    }
}

export default Search

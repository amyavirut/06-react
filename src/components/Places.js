import React from 'react'
import Favorites from './Favorites'
import Search from './Search'
import Thumbnail from './Thumbnail'
import '../styles/Places.css' 

class Places extends React.Component {
    // Set the initial state
    // Favourites array starts empty
    state = {
         places: [
            {title: 'Banyan Tree', price: 5000 , location: 'Samui'}, 
            {title: 'Intercon', price:4000 , location: 'Hua Hin'},
            {title: 'Sala', price: 3000, location: 'Ayuthaya'},
            {title: 'Nikko', price: 2000 , location: 'Bangkok'},
            {title: 'Marriott', price: 1000 , location: 'Phuket'},
            {title: 'Conrad', price: 1500, location: 'Chiangmai'},
        ],
        favorites: [],
        searchTerm: "",
    }

    // Updates the searchTerm in state so the list of places will be filtered
    // This is passed into the Search component as a prop
    updateSearchTerm = (newSearchTerm) => {
        this.setState({
            searchTerm: newSearchTerm,
        })
    }

    // Add a place to the favorites array
    // This is passed into the Thumbnail component as a prop
    addFavorite = (place) => {
        // Create a new array by calling Array.concat() with a new single item array containing place
        // We do this in order to copy the existing favorites array instead of changing this.state.favorites
        let newFavorites = this.state.favorites.concat([place])
        this.setState({
            favorites: newFavorites,
        })
    }

    // Remove a place from the favorites array
    // This is passed into the Thumbnail component as a prop
    removeFavorite = (place) => {
        // We use filter here because it creates a new array rather than modifying the existing
        // this.state.favorites array
        let newFavorites = this.state.favorites
            .filter(element => element != place)
        this.setState({
            favorites: newFavorites,
        })
    }

    // Based on the search term only show a subset of the places
    // If no search term is entered then show all of them
    showPlaces() {
        if (this.state.searchTerm === "") {
            return this.state.places
        }
        return this.state.places.filter(place => place.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    render() {
        // Create child compnents Thumbnails, each is passed place as a prop
        // Also create child component Favorites, which takes favourites as a prop 
        return (
            <div>
                <h1>{this.state.places.length} Places</h1>
                <Search updateSearchTerm={this.updateSearchTerm}/>
                <div className="thumbnails">
                    {this.showPlaces().map((place, index) =>
                        <Thumbnail place={place} key={index} addFavorite={this.addFavorite} removeFavorite={this.removeFavorite}/>
                    )}
                </div>
                <Favorites favorites={this.state.favorites}/>
            </div>
        )
    }
}

export default Places
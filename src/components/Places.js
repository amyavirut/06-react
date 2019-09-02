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
            { title: 'Banyan Tree', price: 5000, location: 'Samui', liked: false },
            { title: 'Intercon', price: 4000, location: 'Hua Hin', liked: false },
            { title: 'Sala', price: 3000, location: 'Ayuthaya', liked: false },
            { title: 'Nikko', price: 2000, location: 'Bangkok', liked: false },
            { title: 'Marriott', price: 1000, location: 'Phuket', liked: false },
            { title: 'Conrad', price: 1500, location: 'Chiangmai', liked: false },
        ],
        searchTerm: "",
    };

    // Updates the searchTerm in state so the list of places will be filtered
    // This is passed into the Search component as a prop
    updateSearchTerm = (newSearchTerm) => {
        this.setState({
            searchTerm: newSearchTerm,
        })
    }

    // Update/mutate the state by flipping the liked property between true/false
    toggleLike = (place) => {
        let newPlaces = this.state.places.map(p => {
            // Only update the place we want to change liked for
            if (p === place) {
                // Create a copy of the place so we don't change the state
                let newPlace = Object.assign({}, p)
                newPlace.liked = !newPlace.liked
                return newPlace
            }
            return p
        })
        this.setState({
            places: newPlaces
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
                <Search updateSearchTerm={this.updateSearchTerm} />
                <div className="thumbnails">
                    {this.showPlaces().map((place, index) =>
                        <Thumbnail place={place} toggleLike={this.toggleLike} key={index} />
                    )}
                </div>
                <Favorites favorites={this.state.places.filter(place => place.liked)} />
            </div>
        )
    }
}

export default Places
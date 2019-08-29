import React from 'react'
import '../styles/Places.css' 

class Places extends React.Component {
    state = {
         places: [
            {title: 'Banyan Tree', price: 5000 , location: 'Samui'}, 
            {title: 'Intercon', price:4000 , location: 'Hua Hin'},
            {title: 'Sala', price: 3000, location: 'Ayuthaya'},
            {title: 'Nikko', price: 2000 , location: 'Bangkok'},
            {title: 'Marriott', price: 1000 , location: 'Phuket'},
            {title: 'Conrad', price: 1500, location: 'Chiangmai'},
        ]
    }
    render() {
        return (
            <div>
                <h1>{this.state.places.length} Places</h1>
                <div className="thumbnails">
                    {this.state.places.map(place =>
                        <div className="thumbnails">{place.title} {place.price} {place.location}</div>
                    )}
                </div>
            </div>
        )
    }
}

export default Places
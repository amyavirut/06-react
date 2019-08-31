import React from 'react'
import '../styles/Favorites.css'

class Favorites extends React.Component {
    render() {
        return (
            <div className="favorites">
                {this.props.favorites.map((place, index) =>
                    <div key={index}>{place.title}</div>
                )}
            </div>
        )
    }
}

export default Favorites
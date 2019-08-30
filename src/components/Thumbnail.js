import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
    state = {
        liked: false
    }

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    likeClass() {
        if (this.state.liked) {
            return "liked"
        }
        return ""
    }

    render() {
        return (
            <div className="thumbnail">
                {this.props.place.title} {this.props.place.price} {this.props.place.location}
                <button onClick={this.toggleLike} className={this.likeClass()}>Like</button>
            </div>
        )
    }
}

export default Thumbnail
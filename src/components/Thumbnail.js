import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
    // Initial state: All places start liked = false
    state = {
        liked: false
    }

    // Update/mutate the state by flipping the liked property between true/false
    toggleLike = () => {
        let newLiked = !this.state.liked
        this.setState({
            // Set liked to the opposite of what it is currently
            liked: newLiked
        })
        if (newLiked) {
            this.props.addFavorite(this.props.place)
        } else {
            this.props.removeFavorite(this.props.place)
        }
    }

    // Return the CSS class of the button element
    // Set to "liked" when this.state.liked == true
    likeClass() {
        if (this.state.liked) {
            return "liked"
        }
        return ""
    }

    render() {
        // onClick={this.toggleLike} : passes the this.toggleLike function without calling it
        // it is instead called when the button is pressed. Because it's not called from within
        // the class it needs to be an "arrow / =>" function so that `this` will bound when it's called
        // which happens when the button is pressed, NOT when render() is called.
        // className={this.likeClass()}: Because likeClass is "called" here, i.e we used the () after
        // the function name it doesn't need to be an arrow function as it's called during render()
        return (
            <div className="thumbnail">
                {this.props.place.title} {this.props.place.price} {this.props.place.location}
                <button onClick={this.toggleLike} className={this.likeClass()}>Like</button>
            </div>
        )
    }
}

export default Thumbnail
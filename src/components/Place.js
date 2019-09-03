import React from 'react';
import '../styles/Place.css'

// The point components is to "encapsulate" - deal with smaller chunks
// of HTML + JS + CSS. Letting us split the application up into smaller
// reusable parts (components)
// Components always have atleast one function, render()
// The job render() is to use JSX to return a chunk HTML to be inserted into the DOM
// Components can get data to put into JSX/DOM from 2 places
// props - which are passed in when the component is created as JSX attributes
// state - which is managed inside of the component itself, using methods like setState
// Components can be nested inside of each other, we call this parent -> child relationship
// The parent is able to pass props to the child via JSX attributes as previously mentioned
// An important detail to remember is that whenever props change or state is updated with setState
// then render() is called (unless prevented by lifecycle hooks)
class Place extends React.Component {
    state = {
        images: [
            'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
            'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
        ],
        currentlyDisplayed: 0,
    }
    //update the state
    updateDisplayed = (imageIndex) => {
        this.setState({
            currentlyDisplayed: imageIndex,
        })
    }

    imageClass(imageIndex) {
        let baseClasses = "smallerimages"
        if (this.state.currentlyDisplayed == imageIndex) {
            baseClasses += " selected"
        }
        return baseClasses
    }

    // render() returns JSX
    // in JSX we can create HTML-like elements with the <element></element> syntax
    // We can use JS by wrapping JS statements with {}, the return value of the expression is inserted into the JSX
    // If you return an array of JSX elements then they are expanded automatically by JSX
    // i.e {this.state.images.map(i => <Image image=i />)} would return an Array of JSX elements, specifically Image components
    // Certain reserved JS words can't be used, mainly "class", so when setting the CSS class of a JSX element you must use className
    // As an additional constraint render() must return a single parent JSX element that all other elements are children of.
    // i.e you must return <div id=parent><div id=child></div></div> and NOT <div id=one></div><div id=two></div>
    render() {
        return (
            <div>
                <h1>Next Destination One Click</h1>
                <div className='main'>
                    <div className='largeimage' style={{backgroundImage: `url('${this.state.images[this.state.currentlyDisplayed]}')` }}></div>
                </div>
                <div className='gallery'>
                    {this.state.images.map((image, index) =>
                        <div className={this.imageClass(index)} onClick={() => { this.updateDisplayed(index)} } style={{backgroundImage: `url('${image}')` }} key={index} />
                    )}
                </div>
            </div>
        )
    }
}

export default Place;
import React from 'react';
import './Splash.css';
import Yosemite from './Yosemite.jpg';
class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.mainImage = Yosemite;
    }


    render() {
        return (
            <>
                <div className="main-picture" style={{ backgroundImage: `url(${this.mainImage})`}}></div> {/* Displays the passed in image */}
            </>
        )
    }
}

export default Splash;
import React from 'react';
import './Splash.css';
import Scroll from './Scroll';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.mainImage = props.mainImage;
    }

    changeScreen() {
        console.log("hi")
        document.getElementById("Hero").style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 10%,rgba(0, 0, 0, 0.4) 35%,rgba(0, 0, 0, .8) 50%)';
    }

    render() {

        return (
            <>
                <header>
                    <img src={this.props.mainImage}></img>

                    <div className="text">
                        <h1>Hi,<br></br>I'm Jimmy Zheng!</h1>
                        <h3 className="mt-2">
                            <i>Full Stack Web Developer continuously improving <br></br>
                            to reach new heights</i>
                        </h3>
                        <button type="button" onClick={this.changeScreen} className="btn btn-outline-light rounded-0">About Me</button>
                    </div>
                    <Scroll />
                </header>
            </>
        )
    }
}

export default Splash;
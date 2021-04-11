import React from 'react';
import './Splash.css';
class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.mainImage = props.mainImage;
    }


    render() {
        return (
            <>
                <div className="main-picture" style={{ backgroundImage: `url(${this.mainImage})` }}>
                    <div className="text">
                        <h1>
                            Hi,<br></br>
                            I'm Jimmy Zheng!
                        </h1>
                        <h3 className="mt-2">
                            Full Stack Web Developer continuously improving <br></br>
                            to reach new heights
                        </h3>
                        <button type="button" class="btn btn-outline-light rounded-0">About Me</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Splash;
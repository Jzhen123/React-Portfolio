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
                <div className="main-picture col-lg-12 col-sm-3" style={{ backgroundImage: `url(${this.mainImage})` }}>
                    <div className="text">
                        <h1>
                            Hi,<br></br>
                            I'm Jimmy Zheng!
                        </h1>
                        <h3 className="mt-2">
                            Full Stack Web Developer continuously improving <br></br>
                            to reach new heights
                        </h3>
                        <button type="button" className="btn btn-outline-light rounded-0">About Me</button>
                    </div>


                    <div className="text-center icon">
                    <h3>Scroll</h3>
                        <div class="icon-scroll">
                            <div class="mouse">
                                <div class="wheel"></div>
                            </div>
                            <div class="icon-arrows">
                                <span></span>
                            </div>
                        </div>
                    </div>s
                </div>
            </>
        )
    }
}

export default Splash;
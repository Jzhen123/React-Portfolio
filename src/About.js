import React, { useState, useEffect } from 'react';

function About({ image }) {
    const [mainImage, setMainImage] = useState(image);

    return (
        <img src={mainImage}></img>
    )
}

export default About;
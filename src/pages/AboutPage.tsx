import React from 'react';
import gradient from "../assets/sec-top-gradient.png";


function AboutPage() {
    return (
        <div style={{
            background: '#E7F1F7',
            height: 400,
            backgroundImage: `url(${gradient})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>

        </div>
    );
}

export default AboutPage;

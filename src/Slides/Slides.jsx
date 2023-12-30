import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slides = () => {
    const images = [
        "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png",
        "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png",
        "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png",
    ]

    return (
        <Slide  autoplay={false}
        onChange={function noRefCheck(){}}
        onStartChange={function noRefCheck(){}}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default Slides;
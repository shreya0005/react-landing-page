import React from 'react';
import featureimage from '../images/Frame 19.png';

function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='feature-image'/>

        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This Application <span>Software </span>is Art</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, similique repellendus. Perspiciatis nisi dicta praesentium repellat laudantium amet dolore cum inventore magni perferendis fugit earum facere expedita rem, minus quia architecto quam omnis! Omnis ducimus asperiores porro, similique beatae possimus?</p>
            <button>View more</button>
        </div>
    </div>
  )
}

export default Features;
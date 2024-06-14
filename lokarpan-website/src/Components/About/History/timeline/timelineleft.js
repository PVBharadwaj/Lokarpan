// DividerSection.jsx

import React from 'react';
import './timelineleft.css';

const Timeleft = ({ heading, content,image}) => {
  return (
   
      <div className='timeline-container1'>
        <div className='timeline-container-inner'>

        <div className="timeline-left-section1">
          {/* Left section content */}
          {/* Add your content here */}
          
          
          <div class='timeline-ls-text'>
            <div className='timeline-left-heading'> {heading}</div>
            <div className='timeline-left-content'>   {content}</div>
          </div>
         <div className="rigt-branch"></div>
          
          
        </div>
        <div className="timeline-right-section1">
          {/* Right section content */}
          {/* Add your content here */}
          <div className='timeline-right-image'>{image}</div>
         
         </div>
        </div>
      </div>
   
  );
};

export default Timeleft;

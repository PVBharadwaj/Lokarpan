// DividerSection.jsx

import React from 'react';
import './timelineright.css';

const TimeRight = ({ heading, content,image}) => {
  return (
   
      <div className='timeline-container'>
        <div className='timeline-container-inner'>
        <div className="timeline-left-section">
          {/* Left section content */}
          {/* Add your content here */}
          <div className='timeline-left-image'>{image}</div>
        </div>
        <div className="timeline-right-section">
          {/* Right section content */}
          {/* Add your content here */}
          <div className="left-branch"></div>
          <div className='timeline-rs-text'>
            <div className='timeline-right-section-heading'>
              {heading}
            </div>
            <div className='timeline-right-section-content'>
              {content}
            </div>
          </div>
        </div>
        </div>

      </div>
   
  );
};

export default TimeRight;

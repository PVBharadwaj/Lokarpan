import React from 'react';
import './timemobile.css'
const Timelinemobile = ({ heading, content,image}) => {
    return (
     
        <div className='history-mobile'>
            
                <div className='history-mobile-head'><div className='time-dash-mobile'></div><div className='history-mobile-head1'>{heading}</div></div>
                <div className='history-mobile-text'>              
                {content}
             
            </div>

            
            <div className='history-mobile-image'>
                {image}
            </div>

        </div>
     
    );
  };

export default Timelinemobile;
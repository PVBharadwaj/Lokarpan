import React, { Component, useState, useEffect } from 'react';
import './histroy.css'
import Timemobile from './timeline/timemobile';
import axios from "axios";

const Timelinemobile = () => {

        const [TimelineData, setTimelineData] = useState([]);

        useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/timeline/')
              .then(response => {
                const sortedData = response.data.sort((a, b) => b.Year - a.Year);
                setTimelineData(sortedData);
                console.log(sortedData)
                setTimelineData(response.data);
                // alert("success");
              })
              .catch(error => {
                alert("error");
                console.error('Error fetching the data:', error);
              });
          }, []);

        return (
            <>
                {TimelineData.map((item, index) => (
                    <div className='timeline-body' key={index} item={item}>
                        <div className='history-year'>{item.Year}</div>
                        {item.Headline1 && (
                            <Timemobile 
                            heading={item.Headline1}
                            content={item.Description1}
                            image={<img src={item.Picture1} alt="Your Alt Text" />}/>
                        )}
                        {item.Headline2 && (
                            <Timemobile
                            heading={item.Headline2}
                            content={item.Description2}
                            image={<img src={item.Picture2} alt="Your Alt Text" />}
                            />
                        )}
                        {item.Headline3 && (
                            <Timemobile
                            heading={item.Headline3}
                            content={item.Description3}
                            image={<img src={item.Picture3} alt="Your Alt Text" />}
                            />
                        )}
                        {item.Headline4 && (
                            <Timemobile
                            heading={item.Headline4}
                            content={item.Description4}
                            image={<img src={item.Picture4} alt="Your Alt Text" />}
                            />
                        )}
                        {item.Headline5 && (
                            <Timemobile
                            heading={item.Headline5}
                            content={item.Description5}
                            image={<img src={item.Picture5} alt="Your Alt Text" />}
                            />
                        )}
                        {item.Headline6 && (
                            <Timemobile
                            heading={item.Headline6}
                            content={item.Description6}
                            image={<img src={item.Picture6} alt="Your Alt Text" />}
                            />
                        )}
                    </div>
                ))}
            </>
            
        );
    
}

export default Timelinemobile;
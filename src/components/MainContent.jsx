import React from 'react';
import '../CSS/MainContent.css';

export const MainContent = (props) => (
    <div className="mainContent">
        {props.content.map(item => (
            <div className="content">
                <img src={item.img} alt={item.alt}></img>
                <p>{item.content}</p>
            </div>
        ))}
    </div>
);
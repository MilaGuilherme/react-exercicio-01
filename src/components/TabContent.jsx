import React from 'react';
import '../CSS/TabContent.css';


export const TabContent = ({
    content
}) => {
    return (
        <div className="tabContent">
            <h2>{content.name}</h2>
            <p>{content.content}</p>
        </div>
    );
}
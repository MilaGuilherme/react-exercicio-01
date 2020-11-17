import React from 'react';
import '../CSS/Tabs.css';

export const Tab = ({
    tabs,
    onTabSelected
}) => {
    return (
        <ul className="tabs">
                {tabs.map(tab => (
                    <li key={tab.name}>
                        <button onClick={() => onTabSelected(tab.id)}
                            style={{ fontWeight : 700 }}
                            rel="noreferrer">
                            {tab.name}
                        </button>
                    </li>
                ))}
        </ul>);
};
import React from 'react'
import '../CSS/Sidebar.css'

export const Sidebar = (props) => (
    <div className="sidebar">
        <ul>
            {props.sections.map(item => (
                <li key={item.title}>
                    <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
                </li>
            ))}
        </ul>
    </div>
);
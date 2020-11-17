import React from "react";
import '../CSS/NavMenu.css'

export const NavMenu = (props) => (
  <nav className="main-nav">
    <ul>
        {props.items.map(item => (
            <li key={item.title}>
                <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
            </li>
        ))}
    </ul>
  </nav>
);

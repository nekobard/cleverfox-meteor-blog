import React from 'react';

export const MainLayout = ({content}) => (
  <div>
    <div className="navbar">
      <div className="container">
        <nav>
          <img src='images/logo.png' alt="brand" className="brand-logo"/>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
          </ul>
        </nav>
      </div>
    </div>
    {content}
  </div>
)

import React from 'react';

//Header component, contains app title and subtitle
const Header = ({ title, subtitle }) => (
  <div className="header">
    {/* App Title here */}
    <div className="title">{title}</div>
    {/* App subtitle contains description about the app */}
    <div className="subtitle">{subtitle}</div>
  </div>
);

export default Header;

import React from 'react';

const Header = ({ title, subtitle }) => (
  <div className="header">
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
  </div>
);

export default Header;

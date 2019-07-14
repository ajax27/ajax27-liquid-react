import React from 'react';
import './homepage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Short Fills</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Starter Kits</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Vape Pens</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Vape Tanks</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Coil Selection</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Accessories</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
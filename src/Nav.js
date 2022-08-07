import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [showNav, handleShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.window.pageYOffset > 100) {
        handleShowNav(true);
      } else {
        handleShowNav(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${showNav && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />

      <img
        className="user"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
    </div>
  );
}

export default Nav;

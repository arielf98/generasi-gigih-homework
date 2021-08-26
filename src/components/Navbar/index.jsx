/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */

import React from 'react';
import NavbarIcon from '../NavbarIcon';
import Search from '../Search';
import './style.css';

export default function Navbar() {
  return (
    <div className="playlist-navbar">
      <div className="navbar">
        <Search />
        <NavbarIcon />
      </div>
    </div>
  );
}

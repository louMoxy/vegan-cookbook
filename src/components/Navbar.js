import React from 'react';
import Link from 'gatsby-link';
require('../style/nav.scss');
import Logo from '-!svg-react-loader?name=Logo!../img/logo.svg';
import AllSvg from '../img/icons/all-icon.svg';
import BreakfastSvg from '../img/icons/breakfast-icon.svg';
import DinnerSvg from '../img/icons/dinner-icon.svg';
import DessertSvg from '../img/icons/dessert-icon.svg';
import PantrySvg from '../img/icons/pantry-icon.svg';
import DogSvg from '../img/icons/dog-icon.svg';

const Navbar = () => (
  <nav>
    <ul>
      <li>
      <Link to="/" className="navbar-item">
        <Logo />
      </Link>
    </li>
      <li>
        <Link to="/">
          <AllSvg />
          <p>All</p>
        </Link>
      </li>
      <li>
        <Link to="/category/breakfast" className="navbar-item">
          <BreakfastSvg />
          <p>Breakfast</p>
        </Link>
      </li>
      <li>
        <Link to="/category/dinner" className="navbar-item">
          <DinnerSvg />
          <p>Dinner</p>
        </Link>
      </li>
      <li>
        <Link to="/category/dessert" className="navbar-item">
          <DessertSvg />
          <p>Dessert</p>
        </Link>
      </li>
      <li>
        <Link to="/category/pantry" className="navbar-item">
          <PantrySvg />
          <p>Pantry</p>
        </Link>
      </li>
      <li>
        <Link to="/category/dog-treats" className="navbar-item">
          <DogSvg />
          <p>Dog Treats</p>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar

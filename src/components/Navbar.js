import React from 'react';
import NavLink  from 'gatsby-link';
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
      <NavLink  to="/">
        <Logo />
      </NavLink >
    </li>
      <li>
        <NavLink  to="/" activeClassName="active" exact>
          <AllSvg />
          <p>All</p>
        </NavLink >
      </li>
      <li>
        <NavLink  to="/category/breakfast" activeClassName="active">
          <BreakfastSvg />
          <p>Breakfast</p>
        </NavLink >
      </li>
      <li>
        <NavLink  to="/category/dinner" activeClassName="active">
          <DinnerSvg />
          <p>Dinner</p>
        </NavLink >
      </li>
      <li>
        <NavLink  to="/category/dessert" activeClassName="active">
          <DessertSvg />
          <p>Dessert</p>
        </NavLink >
      </li>
      <li>
        <NavLink  to="/category/pantry" activeClassName="active">
          <PantrySvg />
          <p>Pantry</p>
        </NavLink >
      </li>
      <li>
        <NavLink  to="/category/dog-treats" activeClassName="active">
          <DogSvg />
          <p>Dog Treats</p>
        </NavLink >
      </li>
    </ul>
  </nav>
)

export default Navbar

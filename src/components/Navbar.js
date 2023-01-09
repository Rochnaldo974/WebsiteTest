import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <ul className="nav-menu">
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a href="\" className={items.cName}>
                  <i class={items.icon}>
                    <i />
                    {items.title}
                  </i>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;

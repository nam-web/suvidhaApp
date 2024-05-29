import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { navItems } from "./NavItems";
import { Dropdown, Dropdown2 } from "./Dropdown";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} className="logo"/>
      </Link>
      <ul className={`nav-items ${mobileMenu?'':'hide-mobile-menu'}`}>
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title} <i class="fa fa-caret-down"></i></Link>
                  {dropdown && <Dropdown />}
                </li>  
              );
            }
            else if (item.title === "Industries") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown2(true)}
                  onMouseLeave={() => setDropdown2(false)}
                >
                  <Link to={item.path}>{item.title} <i class="fa fa-caret-down"></i></Link>
                  {dropdown2 && <Dropdown2 />}
                </li>  
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

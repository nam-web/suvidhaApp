import { useState } from "react";
import { serviceDropdown, serviceDropdown2 } from "./NavItems";
import { Link } from "react-router-dom";
import "./dropdown.scss";

export function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
  return (
      <ul
        className={dropdown ? "services-submenu-clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
  )
}

export function Dropdown2() {
    const [dropdown2, setDropdown2] = useState(false);
    return (
    <ul
    className={dropdown2 ? "industries-submenu-clicked" : "industries-submenu"}
    onClick={() => setDropdown2(!dropdown2)}
  >
    {serviceDropdown2.map((item) => {
      return (
        <li key={item.id}>
          <Link
            to={item.path}
            className={item.cName}
            onClick={() => setDropdown2(false)}
          >
            {item.title}
          </Link>
        </li>
      );
    })}
  </ul>
  )
}


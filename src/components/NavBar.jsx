import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="sticky top-0">
      <div className="flex justify-around items-center bg-[#005f99] p-6">
        <div>
          <ul className="flex gap-28 items-center text-lg text-white font-bold">
            <li className="navLink">
              <Link to="/">Home</Link>
            </li>
            <li className="navLink">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="navLink">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="navLink">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">

      <ul className="navbar">
        <li className="navbar__item">
          <Link className="nav-link" to="/tasks">Tasks</Link>
        </li>
        <li className="navbar__item">
          <Link className="nav-link" to="/items">Items</Link>
        </li>
      </ul>
    </nav>
  )
}
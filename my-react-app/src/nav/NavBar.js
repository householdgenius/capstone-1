import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <h2>Welcome to Shelbye's Stacks</h2>
      <ul className="navbar">
        <li className="navbar__item">
          <button className="button"><Link className="nav-link" to="/tasks">Tasks</Link></button>
        </li>
        <li className="navbar__item">
          <button className="button"><Link className="nav-link" to="/items">Items</Link></button>
        </li>
      </ul>
    </nav>
  )
}
import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div className="links">
        <NavLink to="">Цезарь</NavLink>
        <NavLink to="/simple">Моноалфавитноe</NavLink>
        <NavLink to="/thriterium">Триметериус</NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default Layout

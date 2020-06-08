import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import './Header.css'

const Header = () => {
  const { user, logout } = useContext(UserContext)
  return (
    <header>
      <nav>
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  )
}

export default Header

import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Header = () => {
  const { logout } = useContext(UserContext)
  return (
    <header>
      <nav>
        <button onClick={logout}>Logout</button>
      </nav>
    </header>
  )
}

export default Header

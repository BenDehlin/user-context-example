import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"

const Login = () => {
  const { login, register } = useContext(UserContext)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => login({ username, email, password })}>
        Login
      </button>
      <button onClick={() => register({ username, email, password })}>
        Register
      </button>
    </div>
  )
}

export default Login

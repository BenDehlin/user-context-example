import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"

const Login = () => {
  const { remember, toggleRemember, login, register } = useContext(UserContext)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <input
        name="username"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <input
          id="remember"
          name="remember"
          type="checkbox"
          value={remember}
          checked={remember}
          label="Remember Me"
          onChange={(e) => toggleRemember(e.target.checked)}
        />
        <label htmlFor="remember">Remember Me</label>
      </div>
      <div>
        <button onClick={() => login({ username, email, password })}>
          Login
        </button>
        <button onClick={() => register({ username, email, password })}>
          Register
        </button>
      </div>
    </div>
  )
}

export default Login

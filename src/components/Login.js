import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { useHistory } from "react-router-dom"

const Login = () => {
  const { user, login, register } = useContext(UserContext)
  const { push } = useHistory()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() => {
    user && push("/profile")
  }, [user, push])
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

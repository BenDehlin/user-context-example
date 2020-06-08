import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import useInput from "../hooks/useInput"

const Login = () => {
  const { remember, toggleRemember, login, register } = useContext(UserContext)
  const [{ username, email, password }, setValues] = useInput({
    username: "",
    email: "",
    password: "",
  })
  return (
    <div>
      <input
        name="username"
        placeholder="Enter Username"
        value={username}
        onChange={setValues}
      />
      <input
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={setValues}
      />
      <input
        name="password"
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={setValues}
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

import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import useInput from "../hooks/useInput"
import "./Login.css"

const Login = () => {
  const { remember, toggleRemember, login, register } = useContext(UserContext)
  const [{ username, email, password }, setValues] = useInput({
    username: "",
    email: "",
    password: "",
  })
  return (
    <div className="login-page">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault()
          login({ username, email, password })
        }}
      >
        <input
          className="login-input"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={setValues}
        />
        <input
          className="login-input"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={setValues}
        />
        <input
          className="login-input"
          name="password"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={setValues}
        />
        <div className="remember-section">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            value={remember}
            checked={remember}
            label="Remember Me"
            onChange={(e) => toggleRemember(e.target.checked)}
          />
          <label id="remember-label" htmlFor="remember">
            Remember Me
          </label>
        </div>
        <div className="button-container">
          <button className="login-button" type="submit">
            Login
          </button>
          <button
            className="login-button"
            onClick={() => register({ username, email, password })}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login

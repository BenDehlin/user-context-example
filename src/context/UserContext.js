import React, { useState, createContext, useEffect } from "react"
import axios from "axios"

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  )
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])
  const login = (body) => {
    axios
      .post("/auth/login", body)
      .then(({ data }) => setUser(data))
      .catch(({ message }) => console.log(message))
  }
  const register = (body) => {
    axios
      .post("/auth/register", body)
      .then(({ data }) => setUser(data))
      .catch(({ message }) => console.log(message))
  }
  const logout = () => {
    axios
      .post("/auth/logout")
      .then(() => setUser(null))
      .catch(({ message }) => console.log(message))
  }
  const getUser = () => {
    axios
      .get("/auth/user")
      .then(({ data }) => setUser(data))
      .catch(({ message }) => console.log(message))
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, login, register, logout, getUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

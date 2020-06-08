import React, { useState, createContext, useEffect } from "react"
import axios from "axios"

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"))
  })
  const [remember, setRemember] = useState(() => {
    return JSON.parse(localStorage.getItem("remember")) || false
  })
  useEffect(() => {
    if (remember) {
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("remember", JSON.stringify(remember))
    }
  }, [user, remember])
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
      .then(() => {
        setUser(null)
        setRemember(false)
        localStorage.clear()
      })
      .catch(({ message }) => console.log(message))
  }
  const getUser = () => {
    axios
      .get("/auth/user")
      .then(({ data }) => setUser(data))
      .catch(({ message }) => console.log(message))
  }

  const toggleRemember = (value) => {
    setRemember(value)
    !value && localStorage.clear()
  }

  return (
    <UserContext.Provider
      value={{
        user,
        remember,
        toggleRemember,
        setUser,
        login,
        register,
        logout,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

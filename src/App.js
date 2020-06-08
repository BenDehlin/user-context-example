import React from "react"
import "./App.css"
import routes from "./routes"
import Header from "./components/Header"
import {  UserProvider } from "./context/UserContext"

function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        {routes}
      </UserProvider>
    </div>
  )
}

export default App

import React from "react"
import "./App.css"
import routes from "./routes"
import Header from "./components/Header"
import useAuth from "./hooks/useAuth"

function App() {
  useAuth()
  return (
    <div>
      <Header />
      {routes}
    </div>
  )
}

export default App

import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Profile = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <div>Profile</div>
      <div>{JSON.stringify(user, null, 2)}</div>
    </div>
  )
}

export default Profile

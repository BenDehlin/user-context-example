import { useEffect, useContext } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const useAuth = (adminRequired = false) => {
  const { user } = useContext(UserContext)
  const {pathname} = useLocation()
  const { push } = useHistory()
  useEffect(() => {
    if (!user) {
        pathname !== "/" && push("/")
    } else if (pathname === "/") {
      push("/dashboard")
    } else if (adminRequired && !user.is_admin) {
      push("/dashboard")
    }
  }, [user, pathname, push, adminRequired])
}
export default useAuth

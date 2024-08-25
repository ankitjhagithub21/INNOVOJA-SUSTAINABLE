import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/authSlice'

const useFetchAuthUser = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const getUser = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/user`, {
        credentials: 'include'
      })
      const data = await res.json()
      if (data.success) {
        if (data.user.role === "admin") {

          dispatch(setUser(data.user))
        } else {

          dispatch(setUser(null))
        }
      } else {
        dispatch(setUser(null))
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  return loading;
}

export default useFetchAuthUser

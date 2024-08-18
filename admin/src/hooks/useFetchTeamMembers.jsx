import { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { setMembers } from '../redux/slices/teamSlice'

const useFetchTeamMembers = () => {
     const dispatch = useDispatch()
    const getTeamMembers = async() => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/team/members`)
            const data = await res.json()
          
           if(data.success){
            dispatch(setMembers(data.members))
           }
            

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getTeamMembers()
    }, [])
    
}

export default useFetchTeamMembers

import { useState } from 'react'
import { useEffect } from 'react'

const useFetchTeamMembers = () => {
    const [members, setMembers] = useState([])
    const getTeamMembers = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/team/members`)
            const data = await res.json()

            if (data.success) {
                setMembers(data.members)
            }


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getTeamMembers()
    }, [])
    return members;

}

export default useFetchTeamMembers

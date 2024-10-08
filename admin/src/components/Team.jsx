import Swal from 'sweetalert2'
import Member from './Member'
import { useDispatch, useSelector } from 'react-redux'
import useFetchTeamMembers from '../hooks/useFetchTeamMembers'
import { setMembers } from '../redux/slices/teamSlice'
import Loader from './Loader'

const Team = () => {
    const loading =  useFetchTeamMembers()
    const {members} = useSelector(state=>state.team)

    const dispatch = useDispatch()
    const handleRemoveMember = async (memberId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {  
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/team/member/${memberId}`, {
                        method: "DELETE",
                        credentials: 'include'
                    });
                    const data = await res.json();
                    if (data.success) {
                        const updatedMembers = members.filter((member=>member._id !== memberId))
                       dispatch(setMembers(updatedMembers))
                        Swal.fire({
                            title: "Deleted!",
                            text: "Member is deleted.",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: data.message,
                            icon: "error"
                        });
                    }
                } catch (error) {
                    
                    console.log(error);
                }
            }
        });
    };
   

    if(loading){
        return <Loader/>
    }

    return (
        <section className='py-24 relative'>
           
           
            <h1 className='text-center text-3xl font-bold mb-10'>Members</h1>
            <div className='container mx-auto flex flex-wrap justify-center'>
                {members.map((member) => (
                    <Member key={member._id} member={member} handleRemoveMember={handleRemoveMember} />
                ))}
            </div>
        </section>
    )
}

export default Team

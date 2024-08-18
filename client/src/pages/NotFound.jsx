import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
     <h1 className='lg:text-[200px]  text-[100px] font-bold'>404</h1>
     <p className='text-3xl mb-3'> Page not found.</p>
     <Link className='bg-[#F4965D] text-white px-4 py-2 rounded-full' to="/">Homepage</Link>
    </div>
  )
}

export default NotFound

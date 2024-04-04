import React from 'react'
import { useLogin } from '../hooks/uselogin'
import Navbar from '../components/Navbar/Navbar'

const ProfilePage = () => {
  const username = useLogin()
  return (
    <div className='bg-slate-950 h-screen'>
      <Navbar judul="Profile Page"/>
      <div className='flex flex-col justify-center items-center p-4'>
        <div className='w-60 h-60 rounded-full border-2 overflow-hidden shadow-xl shadow-zinc-900'>
          <img src="../images/naoko.jpg" alt="naoko" />
        </div>
        <h1 className='text-3xl italic font-thin text-white p-2'>{username}</h1>
        <p className='text-xl italic font-thin text-white p-2'>- as FrontEnd Dev -</p>
      </div>
    </div>
  )
}

export default ProfilePage
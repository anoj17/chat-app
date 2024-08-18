import React, { useState } from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { useSelector } from 'react-redux';
import SearchFriend from './SearchFriend';

const Header = () => {

    const [searchUser, setSearchUser] = useState('')
    const userDetails = useSelector((state: any) => state.auth.user)
    const usersDetails = useSelector((state: any) => state.auth.allUser)
    // console.log(usersDetails)


    const changeUser = (e: any) => {
        const { value } = e.target
        setSearchUser(value)
    }

    const submitHandle = (e: any) => {
        e.preventDefault()
        setSearchUser('')
    }
    // console.log(searchUser)

    return (
        <div className='flex border-b flex-col relative'>
            <div className='flex justify-between items-center py-5 px-16'>
                <div>
                    <h1 className='text-xl font-bold'>Chat<span className='text-green-600'>App</span></h1>
                </div>
                <form onSubmit={submitHandle} className="flex border-black border-2 rounded-lg">
                    <input className='focus:outline-none rounded-lg py-1 pl-2 w-[200px]' placeholder='find friends' onChange={changeUser} value={searchUser} />
                    <button className="px-3 bg-blue-600 text-white rounded-tr-lg rounded-br-lg" type='submit'>search</button>
                </form>
                <div className='flex space-x-6'>
                    <BiMessageRounded size={35} className='cursor-pointer' />
                    <IoNotifications size={35} className='cursor-pointer' />
                    <img src={userDetails?.data?.profile} className='h-8 w-8 cursor-pointer rounded-full' />
                </div>
            </div>
            <div className='absolute px-9 shadow-lg lg:top-20 lg:left-[560px]'>
                {
                    searchUser &&
                    usersDetails.filter((items: any) => (
                        items.fname.toLowerCase().includes(searchUser)
                    ))
                        .map((item: any) => (
                           <SearchFriend item={item}/>
                        ))
                }
            </div>
        </div>
    )
}

export default Header

import React, { useState } from 'react'

interface iAppProp {
    item: any
}

const SearchFriend = ({ item }: iAppProp) => {
    const [isAdd, setIsAdd] = useState(false)
  return (
    <div key={item.id} className='flex py-2 justify-between items-center'>
    <div className="flex">
        <img src={item.profile} className='h-6 w-6 rounded-full' />
        <h1 className='ml-4'>{item.fname} {item.lname}</h1>
    </div>
    <button onClick={()=>setIsAdd(!isAdd)} className={`${isAdd ? 'bg-gray-500' : 'bg-blue-600'} w-16 text-white bg-blue-600 ml-28 py-1 rounded-lg`}>{isAdd ? 'sent' : 'add'}</button>
</div>
  )
}

export default SearchFriend

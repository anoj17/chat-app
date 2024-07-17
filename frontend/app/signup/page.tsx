'use client'
import Link from "next/link"
import { useState } from "react"

const page = () => {

    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    })
     
    const [profile, setProfile] = useState('')

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setData({...data, [name]: value})
        console.log(data)
    }

    const submitData = (e: any) => {
        e.preventDefault()
     console.log("hellooo",profile)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form onSubmit={submitData} className="flex flex-col space-y-3 px-16 py-7 bg-white rounded-xl shadow drop-shadow-md">
                <h1 className="text-center text-lg font-medium">Sign Up</h1>
                <div className='flex flex-col'>
                    <label htmlFor="fname">First Name</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"

                        type="text"
                        name="fname"
                        value={data.fname}
                        onChange={handleChange}                   
                        />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="lname">Last Name</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        type="text"
                        name="lname"
                        value={data.lname}
                        onChange={ handleChange}                    
                        />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        onChange={handleChange}
                        type="email"
                        name="email"
                        value={data.email}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={data.password}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="image">Profile Image</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        onChange={(e: any) => setProfile(e.target.files[0])}
                        type="file"
                        name="profile"
                    />
                </div>

                <button className='text-white bg-blue-600 text-center w-full py-2 rounded-md' type="submit">SignUp</button>
                <h1 className="text-center">Already have an account?<Link href='/' className='text-blue-800 font-bold cursor-pointer'>Login</Link></h1>
            </form>
        </main>
    )
}

export default page

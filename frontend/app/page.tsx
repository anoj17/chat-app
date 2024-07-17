'use client'

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPwd, setShowPwd] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col space-y-3 px-16 py-7 bg-white rounded-xl shadow drop-shadow-md">
        <h1 className="text-center text-lg font-medium">Sign In</h1>

        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <input className="py-2 px-3 w-[400px] border shadow-md"
            type="email"
            placeholder="abc@gmail.com"
            name="email"
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="password">Password</label>
          <div className=" flex items-center">
            <input className="py-2 px-3 w-[400px] border shadow-md"
              type={!showPwd ? 'password': "text"}
              name="password"
            />
            {/* <div className="bg-gray-200 text-center items-center cursor-pointer flex justify-center rounded-lg px-2 text-sm h-8"
            onClick={()=>setShowPwd(!showPwd)}
            >{!showPwd ? "show" : "hide"}</div> */}
          </div>
        </div>

        <button className='text-white bg-blue-600 text-center w-full py-2 rounded-md' type="button">SignIn</button>
        <h1 className="text-center">Already have an account?<Link href='/signup' className='text-blue-800 font-bold cursor-pointer'>SignUp</Link></h1>
      </form>
    </main>
  );
}

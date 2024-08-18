"use client"

import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { allUsers } from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { allUserRedux } from '../redux/authSlice'
import Header from '../../components/Header'

const page = () => {

  const dispatch = useDispatch()
  // const { isAuthentication } = useSelector((state: any) => state.auth)
  // console.log("authentication", isAuthentication)


  useQuery(['allusers'], allUsers, {
    onSuccess: res => {
      // toast(res?.data)
      dispatch(allUserRedux(res?.data))
    },
    onError: error => {
      console.log(error)
    }
  })
  return (
    <div className=''>
       <Header />
    </div>
  )
}

export default page

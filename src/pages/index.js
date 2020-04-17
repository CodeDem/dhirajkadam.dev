import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import Home from '../components/Home'
import Profile from '../components/Profile'
export default function home() {
  return (
    <HomeLayout
      sidebar={<Profile />}
      main={<Home />}
    />
  )
}

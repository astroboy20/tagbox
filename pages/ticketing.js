import { Footer } from '@/components/Footer'
import { HeaderFixed } from '@/components/Header'
import { Ticketing } from '@/container/Ticketing'
import React from 'react'

const ticketing = () => {
  return (
    <>
    <HeaderFixed/>
    <Ticketing/>
    <Footer/>
    </>
  )
}

export default ticketing
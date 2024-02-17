import { Footer } from '@/components/Footer'
import { HeaderFixed } from '@/components/Header'
import { Events } from '@/container/Host/Events'
import { Hero } from '@/container/Host/Hero'
import React from 'react'

const hostEvent = () => {
  return (
    <div>
       <HeaderFixed/>
       <Hero/>
       <Events/>
       <Footer/>
    </div>
  )
}

export default hostEvent
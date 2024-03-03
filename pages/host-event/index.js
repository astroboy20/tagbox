import { Footer } from '@/components/Footer'
import { HeaderFixed } from '@/components/Header'
import { Events } from '@/container/Host/Events'
import { Hero } from '@/container/Host/Hero'
import ProtectedRoute from '@/container/ProtectedRoute/ProtectedRoute'
import React from 'react'

const hostEvent = () => {
  return (
    <div>
      <ProtectedRoute>
      <HeaderFixed/>
       <Hero/>
       <Events/>
       <Footer/>
      </ProtectedRoute>
      
    </div>
  )
}

export default hostEvent
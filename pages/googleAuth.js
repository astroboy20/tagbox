import React from 'react'
import { useSearchParams } from 'next/navigation'

const GoogleAuth = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    console.log(token)
  return (
    <div>googleAuth</div>
  )
}

export default GoogleAuth
import React from 'react'
import { useSearchParams } from 'next/navigation'

const googleAuth = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    console.log(token)
  return (
    <div>googleAuth</div>
  )
}

export default googleAuth
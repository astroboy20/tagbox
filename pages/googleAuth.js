import {useEffect} from 'react'
import { useSearchParams } from 'next/navigation'
import {Dispatch, useSelector} from "react-redux"
import { updateUser } from '@/features/authSlice'

const GoogleAuth = () => {
    const searchParams = useSearchParams()
    const dispatch = Dispatch()
    const token = searchParams.get("token")
    console.log(token)


    useEffect(() => {
        if (token) {
            dispatch(updateUser(token))
          router.push("/");
        }
      }, [router]);
  return (
    <div>googleAuth</div>
  )
}

export default GoogleAuth
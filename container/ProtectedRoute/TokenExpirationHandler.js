import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useRouter } from 'next/router'
import { reset } from '@/features/authSlice'
const TokenExpirationHandler = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    const router = useRouter()
    
    useEffect(() => {
      const protectedRoute = ["host-event", "ticketing", "attend-event-event", "blog", "profile","customize"]
        if (!user && protectedRoute.includes(router.pathname)) { // Token is null or undefined
          dispatch(reset());
          router.push('/login'); // Redirect to login page when token is null
        }
      }, [user, router.pathname]);
    
    
  return null
}

export default TokenExpirationHandler
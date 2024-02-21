import {useEffect} from 'react'
import { useSearchParams } from 'next/navigation'

const GoogleAuth = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    console.log(token)


    useEffect(() => {
        if (token) {
          router.push("/");
        }
      }, [router]);
  return (
    <div>googleAuth</div>
  )
}

export default GoogleAuth
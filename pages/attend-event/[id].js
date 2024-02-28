import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { SingleEvent } from "@/container/Host/SingleEvent";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios"
import  {useRouter} from "next/router"

const EventId = () => {
    const router = useRouter();
    const {id} = router.query
    const [name, setName] = useState("");

  
    const fetchEventName = async () => {
      try {
        const response = await axios.get(`https://tagbox.onrender.com/v1/event/a72bd029-0050-4481-aeba-8d22378d52b3`,{headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRjNmVlM2ZkYjMwYzllMDFjN2IzYjciLCJlbWFpbCI6InRvbHVsb3BlYWtpbmt1bm1pMjAyNUBnbWFpbC5jb20iLCJpYXQiOjE3MDkxMzE5MjksImV4cCI6MTcwOTIxODMyOX0.-2mkktXJPxJLJpvrmIZ0W4eXmFNf1U8xPO3fVcZk2Gg"
        }});
        setName(response.data.data.event_type);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (id) {
        fetchEventName();
      }
    }, [id]);
  
    return (
      <>
        <HeaderFixed />
        {/* <SingleEvent name={name} id={id} /> */}
        <Footer />
      </>
    );
  };
  

export default EventId;

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
        const response = await axios.get(`https://tagbox.onrender.com/v1/event-type/${id}`);
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
        <SingleEvent name={name} id={id} />
        <Footer />
      </>
    );
  };
  

export default EventId;

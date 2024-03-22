import { Footer } from "@/components/Footer";
import { HeaderFixed } from "@/components/Header";
import { SingleEvent } from "@/container/Host/SingleEvent";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";

const EventId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");

  const fetchEventName = async () => {
    try {
      const response = await axios.get(
        `https://tagbox.ployco.com/v1/event-type/${id}`
      );
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
      {" "}
      <Head>
        <title>TagBox | Host-Event</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/at.svg" />
      </Head>{" "}
      <>
        <ProtectedRoute>
          <HeaderFixed />
          <SingleEvent name={name} id={id} />
          <Footer />
        </ProtectedRoute>
      </>
    </>
  );
};

export default EventId;

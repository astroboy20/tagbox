import { useState, useCallback, useRef } from "react";

import Image from "next/image";
import { Edit } from "./Edit.style";
import QRCode from "react-qr-code";
import { Input } from "@/components/Input/Input";
import html2canvas from "html2canvas";
import axios from "axios";
import Spinner from "@/components/Spinner/Spinner";
import { toast } from "react-toastify";
import { Button } from "@/components/Button/Button";
const EventIv = ({ name, uniqueId }) => {
  const [details, setDetails] = useState({
    firstName: "Fidel",
    lastName: "Kairat",
    date: "SAT, 23th OCT 2025",
    time_location: "  12:00 PM, TRANSCORP  HILTON HOTEL",
    ticket: " silviaandmatthew.com before Oct 10, 2025.",
  });

  const [detailsBirthDay01, setDetailsBirthday01] = useState({
    name: "Fidel",
    age: "@60",
    date: "Saturday, March 09, 2024",
    time: "6pm",
    address: " silviaandmatthew.com before Oct 10, 2025.",
  });
  const handleBirthTextChange = (e) => {
    const { name, value } = e.target;
    setDetailsBirthday01((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const imageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const downloadQrCode = async () => {
    if (imageRef.current) {
      try {
        setLoading(true);
        const canvas = await html2canvas(imageRef.current);
        const imageData = canvas.toDataURL("image/png");

        const blobBin = atob(imageData.split(",")[1]);
        const array = [];
        for (let i = 0; i < blobBin.length; i++) {
          array.push(blobBin.charCodeAt(i));
        }
        const file = new Blob([new Uint8Array(array)], { type: "image/png" });

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "za8tsrje");

        const cloudinaryResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          formData
        );

        const imageUrl = cloudinaryResponse.data.secure_url;
        typeof window !== "undefined" &&
          localStorage.setItem("imageUrl", imageUrl);
        toast.success("Uploaded image URL:", imageUrl);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div>
      <>
        {name === "Birthday" && (
          <>
            {" "}
            <div className="invitation-card">
              <Edit ref={imageRef}>
                <div>
                  <Image
                    src={"/images/birthday-iv.svg"}
                    width={400}
                    height={560}
                    alt="test"
                    className="iv-image"
                  />
                </div>

                <div className="name">
                  <p>{detailsBirthDay01.name}</p>
                </div>
                <div className="age">
                  <p>{detailsBirthDay01.age}</p>
                </div>
                <div className="date-time">
                  <p style={{ color: "#C995B4" }}>{detailsBirthDay01.date}</p>
                  <p style={{ color: "#241E20" }}>{detailsBirthDay01.time}</p>
                </div>
                <div className="address">
                  <p>{detailsBirthDay01.address}</p>
                </div>
                <div className="qr-birth">
                  <p>
                    {uniqueId && (
                      <QRCode
                        size={55}
                        style={{
                          height: "auto",
                        }}
                        value={`https://thetagbox.com/attend-event/${uniqueId}`}
                        viewBox={`0 0 256 256`}
                      />
                    )}
                  </p>
                </div>
              </Edit>
            </div>
            <Input
              variant={"text"}
              type={"text"}
              placeholder={"Name"}
              name={"name"}
              value={detailsBirthDay01.name}
              onChange={handleBirthTextChange}
            />
            <Input
              variant={"text"}
              type={"text"}
              placeholder={"Age"}
              name={"age"}
              value={detailsBirthDay01.age}
              onChange={handleBirthTextChange}
            />
            <Input
              variant={"text"}
              type={"text"}
              placeholder={"Date"}
              name={"date"}
              value={detailsBirthDay01.date}
              onChange={handleBirthTextChange}
            />
            <Input
              variant={"text"}
              type={"text"}
              placeholder={"Time"}
              name={"time"}
              value={detailsBirthDay01.time}
              onChange={handleBirthTextChange}
            />
            <Input
              variant={"text"}
              type={"text"}
              placeholder={"Address"}
              name={"address"}
              value={detailsBirthDay01.address}
              onChange={handleBirthTextChange}
            />
            <Button variant={"dark-button"} onClick={downloadQrCode}>
              {loading ? <Spinner /> : "Save"}
            </Button>
          </>
        )}
      </>

      {name === "Wedding" && (
        <>
          <div className="invitation-card">
            <Edit>
              <Image
                src={
                  "https://res.cloudinary.com/dm42ixhsz/image/upload/v1709557796/edit-test_diyagi.svg"
                }
                width={400}
                height={560}
                alt="test"
                className="iv-image"
              />
              <div className="names">
                <div className="name-one">
                  <p>{details.firstName}</p>
                  <p>{details.lastName}</p>
                </div>
                <div className="name-two"></div>
              </div>
              <div className="qr">
                <p>
                  {uniqueId && (
                    <QRCode
                      size={55}
                      style={{
                        height: "auto",
                      }}
                      value={`https://thetagbox.com/attend-event/${uniqueId}`}
                      viewBox={`0 0 256 256`}
                    />
                  )}
                </p>
              </div>
              <div className="time">
                <p>{details.date}</p>
              </div>
              <div className="location">
                <p>{details.time_location}</p>
              </div>
              <div className="ticket">
                <p>{details.ticket}</p>
              </div>
            </Edit>
          </div>
        </>
      )}
    </div>
  );
};

export default EventIv;

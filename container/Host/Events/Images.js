import Image from "next/image";

export const EventImages = {
  Wedding: (
    <Image
      src={"/images/Wedding.png"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="cover"
    />
  ),
  Birthday: (
    <Image
      src={"/images/birthday.png"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="cover"
    />
  ),
  Graduation: (
    <Image
      src={"/images/Graduation.png"}
      width={220}
      height={180}
      alt="weeding"
      className="image"
      objectFit="contain"
    />
  ),
  House_Warming: (
    <Image
      src={"/images/house-warming.png"}
      width={150}
      height={100}
      alt="weeding"
    />
  ),
  Conference: (
    <Image
      src={"/images/meetings.png"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="cover"
    />
  ),
  Shower: (
    <Image
      src={"/images/baby-showers.png"}
      width={150}
      height={200}
      alt="weeding"
      className="image"
      objectFit="cover"
    />
  ),
  Hangout: (
    <Image
      src={"/images/hangout.png"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="cover"
    />
  ),
  Others: (
    <Image
      src={"/images/Others.png"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="cover"
    />
  ),
};

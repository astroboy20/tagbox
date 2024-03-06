import Image from "next/image";

export const EventImages = {
  Wedding: (
    <Image
      src={"/images/wedding.svg"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="contain"
    />
  ),
  Birthday: (
    <Image
      src={"/images/birthday.svg"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="contain"
    />
  ),
  Graduation: (
    <Image
      src={"/images/graduation.svg"}
      width={220}
      height={180}
      alt="weeding"
      className="image"
      objectFit="contain"
    />
  ),
  House_Warming: (
    <Image
      src={"/images/house-warming.svg"}
      width={150}
      height={100}
      className="image"
      alt="weeding"
      objectFit="contain"
    />
  ),
  Conference: (
    <Image
      src={"/images/meetings.svg"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="contain"
    />
  ),
  Shower: (
    <Image
      src={"/images/baby-shower.svg"}
      width={150}
      height={200}
      alt="weeding"
      className="image"
      objectFit="contain"
    />
  ),
  Hangout: (
    <Image
      src={"/images/hangout.svg"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="contain"
    />
  ),
  Others: (
    <Image
      src={"/images/others.svg"}
      width={150}
      height={150}
      alt="weeding"
      className="image"
      objectFit="contain"
    />
  ),
};

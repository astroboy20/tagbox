import {
  Arrow,
  Arrow_Down,
  Close,
  Hamburger,
  Logo,
  Notification,
  ProfilePicture,
} from "@/assets";
import { useEffect, useState } from "react";
import { HeaderContainer, HeaderStyle, HeroContainer } from "./Header.style";
import { Button } from "../Button/Button";
import {
  HeaderFixedContainer,
  HeaderFixedStyle,
  MobileNav,
} from "./HeaderFixed.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { reset } from "@/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios"

const HeaderFixed = () => {
  const [showEvent, setShowEvent] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [notifications, setNotification] = useState([])
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const token = user ? user.token || user  : "";
  console.log(token);

  const fetchNotification = async () => {
    try {
      const response = await axios.get(
        "https://tagbox.ployco.com/v1/user/notification",
        {
          headers: {
            Authorization: `Bearer ${user.data}`,
          },
        }
      );
      console.log(response.data.data.notifications);
      setNotification(response.data.data)
    } catch (error) {
      console.log(error);
    }
  };
  console.log("d",notifications?.length)
  const notificationCount = notifications?.length
  useEffect(() => {
    if (token){
        fetchNotification();
        console.log("d",notifications?.length)
    }
  
  }, [token, user]);

  const handleShowEvent = () => {
    setShowEvent(!showEvent);
  };

  const handleNav = () => {
    setShow(!show);
  };

  const ActiveLink = (href) => {
    return router.pathname === href;
  };
  const handleLogout = () => {
    dispatch(reset());
    toast.success("You have been successfully logged out");
    router.push("/login");
  };

  return (
    <>
      <HeaderFixedContainer>
        <HeaderFixedStyle>
          <Link href={"/"}>
            <Logo />
          </Link>
          <div className="hamburger" onClick={handleNav}>
            {show ? <Close /> : <Hamburger />}
          </div>

          <div className="center-nav">
            <div onClick={handleShowEvent} className="events">
              <div className="text">
                <p>Host an Event</p>
                <Arrow />
              </div>
              {showEvent && (
                <>
                  <div className="event">
                    <span>
                      <Link href={"/host-event"} className="link-event">
                        Host an Event
                      </Link>
                    </span>
                    <span>
                      <Link href={"/attend-event"} className="link-event">
                        Attend an Event
                      </Link>
                    </span>
                    <span>
                      <Link href={"/manage-event"} className="link-event">
                        Manage Event
                      </Link>
                    </span>
                    {/* <span>Manage Event</span> */}
                  </div>
                </>
              )}
            </div>

            <p>
              <Link
                className={`link ${ActiveLink("/blog") && `active`}`}
                href={"/blog"}
              >
                Blog
              </Link>
            </p>
            <p>
              <Link
                className={`link ${ActiveLink("/ticketing") && `active`}`}
                href={"/ticketing"}
              >
                Ticketing
              </Link>
            </p>
            <p>
              <Link
                className={`link ${ActiveLink("/customize") && `active`}`}
                href={"/customize"}
              >
                Customize
              </Link>
            </p>
          </div>
          <div className="right-nav">
            <Link href={"/notification"}>
              <div className="notification">
                {" "}
                <Notification /> <p className="count">{notificationCount}</p>
              </div>
            </Link>

            <Link href={"/profile"}>
              <ProfilePicture />
            </Link>
          </div>
        </HeaderFixedStyle>
        {show && (
          <MobileNav>
            <span onClick={handleShowEvent} className="events">
              <span className="text">
                <p>Host an Event</p>
                <Arrow/>
              </span>
              {showEvent && (
                <>
                  <div className="event">
                    <span>
                      <Link href={"/host-event"} className="link-event">
                        Host an Event
                      </Link>
                    </span>
                    <span>
                      <Link href={"/host-event"} className="link-event">
                        Attend an Event
                      </Link>
                    </span>
                    <span>
                      <Link href={"/manage-event"} className="link-event">
                        Manage Event
                      </Link>
                    </span>
                  </div>
                </>
              )}
            </span>
            <Link href={"/blog"} className="link">
              Blog
            </Link>
            <Link href={"/ticketing"} className="link">
              Ticketing
            </Link>
            <Link href={"/customize"} className="link">
              Customize
            </Link>
            <Link href={"/notification"} className="link" style={{display:"flex", alignItems:"center", gap:"10px"}}>
              Notifications <p style={{color:"#FE0707"}}>({notificationCount})</p>
            </Link>
            <Link href={"/profile"} className="link">
              Profile
            </Link>
            {token ? (
              <p onClick={handleLogout}>Logout</p>
            ) : (
              <Link href={"/login"} className="links">
                Login
              </Link>
            )}
          </MobileNav>
        )}
      </HeaderFixedContainer>
    </>
  );
};

export { HeaderFixed };

import { Arrow, Arrow_Down, Close, Hamburger, Logo } from "@/assets";
import { useState } from "react";
import {
  HeaderContainer,
  HeaderStyle,
  HeroContainer,
  MobileNav,
} from "./Header.style";
import { Button } from "../Button/Button";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/features/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Header = () => {
  const [showEvent, setShowEvent] = useState(false);
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const token = user ? user.token || user : "";
  console.log(token);

  const handleShowEvent = () => {
    setShowEvent(!showEvent);
  };

  const handleNav = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    dispatch(reset());
    toast.success("successful");
    router.push("/login");
  };
  return (
    <>
      <HeaderContainer>
        <HeaderStyle>
          <div>
            <Link href={"/"}>
            <Image
              src={"/images/logo-white.png"}
              className="logo"
              width={167}
              height={48}
              alt="logo"
              objectFit="contain"
            />
            </Link>
           
          </div>

          <div className="hamburger" onClick={handleNav}>
            {show ? <Close /> : <Hamburger />}
          </div>
          <div className="center-nav">
            <div onClick={handleShowEvent} className="events">
              <div className="text">
                <p>Host Events</p>
                <Arrow />
              </div>
              {showEvent && (
                <>
                  <div className="event">
                    <span>
                      {" "}
                      <Link className="nav-link" href={"host-event"}>
                        Host an Event
                      </Link>
                    </span>
                    <span>
                      <Link className="nav-link" href={"attend-event"}>
                        Attend an Event
                      </Link>
                    </span>
                  </div>
                </>
              )}
            </div>
            <p>
              <Link href={"/blog"} className="links">
                Blog
              </Link>
            </p>
            <p>
              <Link href={"/ticketing"} className="links">
                Ticketing
              </Link>
            </p>
            <p>
              <Link href={"/customize"} className="links">
                Customize
              </Link>
            </p>
          </div>
          <div className="right-nav">
            {token ? (
              <p style={{ cursor: "pointer" }} onClick={handleLogout}>
                Logout
              </p>
            ) : (
              <p>
                <Link href={"/login"} className="links">
                  Login
                </Link>
              </p>
            )}

            {token ? (
              ""
            ) : (
              <p className={"nav-button"}>
                {" "}
                <Link href={"/register"} className="nav-link">
                  Sign up
                </Link>
              </p>
            )}
          </div>
        </HeaderStyle>
        {show && (
          <MobileNav>
            <Link href={"/host-event"} className="link">
              Host an event
            </Link>
            <Link href={"/blog"} className="link">
              Blog
            </Link>
            <Link href={"/ticketing"} className="link">
              Ticketing
            </Link>
            <Link href={"/customize"} className="link">
              Customize
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

        <HeroContainer
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="1200"
        >
          <div className="text">
            <h1>
              Welcome To A <br />
              Seamless Event Hosting Experience!
            </h1>
            <p>Host beyond limits, connect beyond expectations.</p>
          </div>

          <div className="button">
            {" "}
            <Button variant={"nav-button"}>Schedule a Demo</Button>
            <Button variant={"transparent-button"}>Host an Event</Button>
          </div>
        </HeroContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };

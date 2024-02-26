import styled from "styled-components";

export const HeaderFixedContainer = styled.div`
  background: #020d1e;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
  padding: 2% 6%;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  right: 0;
  .link{
    text-decoration:none ;
    color:#fff ;
  }
  .link-event{
    text-decoration:none ;
    color:#000 ;
  }
  .active{
    text-decoration:underline ;
  }
`;
export const HeaderFixedStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    width:140px ;
    height:48px ;
  }
  .link{
    text-decoration:none ;
    color:#fff ;
  }
  .active{
    text-decoration:underline ;
  }
  .center-nav {
    display: flex;
    gap: 40px;
    cursor: pointer;
  }
  .center-nav .events {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .center-nav .text {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .center-nav .event {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #c1e8ff;
    color: #020d1e;
    position: absolute;
    top: 115px;
  }
  .event span {
    border-bottom: 1.5px solid #03193b;
    padding: 10px;
    text-align: center;
  }
  .right-nav {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .right-nav .nav-button {
    padding: 16px 12px;
    border-radius: 4px;
    background-color: #c1e8ff;
    color: #020d1e;
    border: none;
    cursor: pointer;
  }
  .hamburger {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    /* padding:6% ; */
    .logo{
    width:100px ;
    height:30px;
  }
    padding: 4% 3%;
    .center-nav,
    .right-nav {
      display: none;
    }
    .hamburger {
      display: block;
    }


  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #13171efa;
  height: 925vh;
  position: relative;
  z-index: 100000000;
  width: 100%;
  left: 0;
  padding: 6%;
  gap: 40px;
  .link {
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
  .text {
    display: flex;
    align-items: center;
    gap: 5px;
    
  }
   .event {
    display: flex;
    flex-direction:column ;
    gap: 20px;
    /* background-color: #c1e8ff; */
    /* color: #020d1e; */
    color:#fff ;
   
  }
  .event span {
    /* border-bottom: 1.5px solid #03193b; */
    padding: 10px;
    text-align: left;
  }
  .event .link-event{
    color: #fff;
  }
  .links {
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
`;

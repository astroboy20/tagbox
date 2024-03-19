import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #020d1e;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  padding: 4% 6% 10% 3%;
  .links {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  .nav-link {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  @media screen and (max-width: 786px) {
    padding: 6% 6% 35% 3%;
  }
`;
export const HeaderStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    width:140px ;
    height:48px;
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
    top: 100px;
    z-index:100 ;
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
    padding: 10px 12px;
    border-radius: 4px;
    background-color: #c1e8ff;
    color: #020d1e;
    border: none;
    cursor: pointer;
  }
  .hamburger {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    padding:3% 6% ;
    .logo{
    width:100px ;
    height:30px;
  }
    .center-nav,
    .right-nav {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
  padding: 2% 0;
  h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: 80px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
  }
  .text{
      padding:3% 0 ;
    }
  .link {
    text-decoration: none;
    color: #020d1e;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    padding:16px 10px ;
  }
  .button {
    display: flex;
    gap: 35px;
    justify-content: center;
    font-weight: 500;
  }
  @media screen and (max-width: 1024px) {
    padding: 4% 0;
    h1 {
      font-size: 28px;
      font-weight: 700;
      line-height: 40px;
      text-align: center;
    }
    p {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
    }
    .text{
      padding:10% 0 ;
    }
    .link {
    text-decoration: none;
    color: #020d1e;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #13171efa;
  height: 925vh;
  position: absolute;
  z-index: 1000;
  width: 100%;
  left: 0;
  padding: 2% 8%;
  gap: 30px;
  .link {
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
  .nav-p{
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
`;

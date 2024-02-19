import styled from "styled-components"

export const HeaderFixedContainer = styled.div`
  background: #020d1e;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  padding: 2% 3% ;
  position:fixed ;
  width:100% ;
 box-sizing:border-box ;
 left:0 ;
 right:0 ;
`;
export const HeaderFixedStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .hamburger{
    display:none ;
  }

  @media screen and (max-width:786px ) {
    padding:4% 3% ;
    .center-nav,.right-nav{
      display:none ;
    }
    .hamburger{
      display:block ;
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
  padding: 6%;
  gap: 30px;
  .link {
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
`;
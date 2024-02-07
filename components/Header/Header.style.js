import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #020d1e;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  padding: 3% 6% 12% 3%;
`;
export const HeaderStyle = styled.nav`
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
    /* padding:2% ; */
    /* left:0 ; */
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
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
  padding: 2% 0;
  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
  }
  p {
    font-size: 40px;
    font-weight: 500;
    line-height: 30px;
  }
  .button {
    display: flex;
    gap: 35px;
    justify-content: center;
  }
`;

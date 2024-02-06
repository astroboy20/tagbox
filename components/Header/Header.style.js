import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #020d1e;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  padding: 3% 6% 15% 3%;
`;
export const HeaderStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  .center-nav,
  .right-nav {
    display: flex;
    gap: 20px;
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap:30px;
  padding:2% 0 ;
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

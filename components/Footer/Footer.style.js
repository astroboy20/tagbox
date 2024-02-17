import styled from "styled-components";

export const FooterContainer = styled.div`
  .top {
    background-image: url("/images/footer-bg.png");
    height: 450px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    gap: 30px;
  }
  .top span {
    font-size: 48px;
    font-weight: 500;
    line-height: 48px;
  }
  .top p {
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    text-align: center;
  }
  .input {
    width: 100%;
    display: flex;
    padding: 5px 0 5px 3%;
    background-color: #fff;
    border-radius:4px ;
  }
  input {
    width: 85%;
    border: none;
    outline: none;
    color: rgba(3, 5, 59, 0.4);
  }
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 6%;
  .left {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  span {
    font-size: 28px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
  }
  .icon {
    display: flex;
    gap: 10px;
  }
`;
export const BottomContainer = styled.div`
  background-color: #03193b;
  display: flex;
  justify-content: space-between;
  padding: 1% 6%;
  p {
    font-size: 28px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    color: #fff;
  }
`;

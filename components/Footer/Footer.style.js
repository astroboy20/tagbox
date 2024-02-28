import styled from "styled-components";

export const FooterContainer = styled.div`
  .top {
    background-image: url("/images/footer-bg.png");
    background-size:auto ;
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
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
  }
  .top p {
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    text-align: center;
    padding:1% 0 ;
  }
  .input {
    width: 80%;
    margin:0 20% ;
    display: flex;
    justify-content:space-between ;
    padding: 5px;
    background-color: #fff;
    border-radius: 4px;
  }
  input {
    /* width: 85%; */
    border: none;
    outline: none;
    color: rgba(3, 5, 59, 0.4);
  }

  @media screen and (max-width: 786px) {
 
    .top {
      height: 300px;
      background-position:center ;
      background-size:cover ;
      
      
    }
    .top span {
      font-size: 20px;
      font-weight: 500;
    }
    .top p {
      font-size: 16px;
      font-weight: 400;
      padding:0 2% ;
    }
    .input {
      width: fit-content;
      padding:5px ;
    }
    input {
      /* width: 60%; */
      /* padding: 5px 0 5px; */
    }
  }
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 6%;
  .left {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .center{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .right{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  span {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }
  .icon {
    display: flex;
    gap: 10px;
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 30px;
    span {
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
export const BottomContainer = styled.div`
  background-color: #03193b;
  display: flex;
  justify-content: space-between;
  padding: 1% 6%;
  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    color: #fff;
  }

  @media screen and (max-width: 786px) {
    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

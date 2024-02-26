import styled from "styled-components";

export const EventContainer = styled.div`
  text-align: center;
  padding: 3% 6%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  span {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    /* justify-content:space-evenly ; */
    gap: 50px;
    padding-top: 10px;
    width: 100%;
  }
  .sub-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 30%;
    padding: 2%;
    /* margin:2% ; */
    background-color: rgba(230, 246, 255, 0.2);
    box-shadow: 1px 1px rgba(3, 25, 59, 0.12);
  }
  .sub-box p {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    text-align: center;
  }
  .image {
    width: 220px;
    height: 220px;
  }
  .link{
    text-decoration: none;
    color:#C1E8FF ;
  }

  @media screen and (max-width: 1024px) {
    padding: 6%;
    span {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
    }
    /* .special{
  width:70% ;
 } */
    .sub-box {
      width: 100%;
      padding:4% ;
    }
    .sub-box p {
      font-size: 16px;
    }
    .image {
      width: 100px;
      height: 80px;
    }
  }
`;

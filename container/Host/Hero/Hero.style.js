import styled from "styled-components";

export const HeroContainer = styled.div`
  background: url("/images/host-event.png");
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:100px ;
  span {
    font-size: 64px;
    font-weight: 500;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    text-decoration: underline;
  }

  @media screen and (max-width: 786px) {
    padding-top:110px ;
    height:200px ;
    background-size:cover ;
    span {
      font-size: 24px;
      font-weight: 700;
      text-decoration: underline;
      text-align: center;
    }
    /* p {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
    }
    .box {
      justify-content: center;
    }
    .sub-box {
      width: auto;
    }
    .sub-box p {
      font-size: 18px;
    } */
  }
`;

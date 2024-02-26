import styled from "styled-components";

export const ChooseContainer = styled.div`
  padding: 6% 6%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  span {
    font-size: 40px;
    font-weight: 500;
    text-decoration: underline;
    text-align: center;
  }
  h2 {
    font-family: Space Grotesk;
    font-size: 28px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
  }
  .text p {
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    padding: 30px 0;
  }

  .slider-body {
    display: flex;
    padding: 3%;
    background-color: rgba(193, 232, 255, 0.2);
    justify-content: center;
    gap: 60px;
  }
  .text {
    text-align: left;
    width: 40%;
    /* display:flex ;
    flex-direction:column ;
    gap:30px; */
  }
  .image {
    text-align: center;
    width: 620px;
    height: 460px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .slider-body {
      flex-direction: column-reverse;
      justify-content: center;
      padding:6% 3% ;
    }

    .image {
      text-align: center;
      width: auto;
      height: 240px;
    }
    h2{
      text-align:center ;
      font-size:18px ;
    }
    .slider-body .text {
      width: 100%;
      text-align: center;
    }
    span {
      font-size: 24px;
      font-weight: 700;
      text-decoration: underline;
      text-align: center;
    }
    .text p {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      padding:10px ;
    }
  }
`;

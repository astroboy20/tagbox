import styled from "styled-components";

export const WhyContainer = styled.div`
  margin: 2% 6% 0% 6%;
  border: 1px solid #2f2e4133;
  box-shadow: 1px 1px #03193b;
  border-radius: 16px;
  position:relative ;
  background:#fff ;
  top:-100px ;
  z-index:100 ;

  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 25px;
    padding: 3% 4%;
  }
  span {
    font-size: 48px;
    font-weight: 500;
    text-decoration: underline;
    text-align: center;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    text-align: justify;
  }
  .button {
    text-align: center;
  }
  @media screen and (max-width: 786px) {
    top:-70px ;
    .text {
    gap: 10px;
    padding: 3% 4%;
  }
    span {
    font-size: 24px;
    font-weight: 700;
    text-decoration: underline;
    text-align: center;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    text-align: justify;
  }
  }
`;

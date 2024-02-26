import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  padding-bottom:6% ;
  span {
    font-size: 32px;
    font-weight: 500;
  }
  p {
    font-family: Space Grotesk;
    font-size: 24px;
    font-weight: 400;
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 6%;
    padding-top: 3%;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .name {
    display: flex;
    gap: 30px;
  }
  .links{
    text-align:center ;
  }
  .link{
    color:black ;
  }
  .right {
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 3% ;
    .icon {
      text-align: right;
    }
  }

  @media screen and (max-width: 1024px) {

    flex-direction: column-reverse;
    .name{
      flex-direction:column ;
      gap:20px;
    }
    .image {
      width: 320px;
      height: 220px;
      padding-top: 50px;
    }
    .header {
      text-align: left;
    }
    .left {
      width: auto;
      text-align: left;
      padding: 6%;
    }
    .right {
      width: auto;
    }
    .right .icon {
      width: auto;
      padding-right:5% ;
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
    }
    .box {
      justify-content: center;
    }
    .sub-box {
      width: auto;
    }
    .sub-box p {
      font-size: 18px;
    }
  }
`;

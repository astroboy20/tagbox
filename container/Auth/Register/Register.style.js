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
`;

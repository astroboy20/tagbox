import styled from "styled-components";

export const UpcomingStyle = styled.div`
  padding: 3% 6%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  span {
    font-size: 48px;
    font-weight: 500;
    text-decoration: underline;
  }

  .span-header {
    font-size: 32px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }
  .span-a {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
  }
  .body {
    display: flex;
    text-align: justify;
    gap: 30px;
  }
  .time {
    display: flex;
    text-align: center;
    gap: 15px;
  }
  .time-a {
    border: 1px solid black;
    padding: 10px;
    background-color: rgba(243, 250, 255, 1);
    font-size: 32px;
    font-weight: 500;
  }
  .time-b {
    background-color: rgba(3, 25, 59, 1);
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    padding: 10px;
  }
  .p {
    font-size: 16px;
    font-weight: 400;
  }
  .button {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .button-span {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

import styled from "styled-components";

export const UpcomingStyle = styled.div`
  padding: 0% 6% 6% 6%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  span {
    font-size: 32px !important;
    font-weight: 500;
    text-decoration: underline;
  }
  .text{
    display:flex ;
    flex-direction:column ;
    gap:20px;
  }



  .span-header {
    font-size: 24px !important;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
  }
  p {
    font-size: 20px !important;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }
  .span-a {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }
  .body {
    display: flex;
    text-align: justify;
    gap: 30px;
  }
  .image{
    width:600px ;
    height:320px ;
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
    text-decoration: none !important;
    font-size: 16px !important;
    font-weight: 500;
    line-height: 24px;
  }

  @media screen and (max-width: 1024px) {
   
   
   span {
   font-size: 20px;
   font-weight: 700;
   text-decoration: underline;
   text-align: center;
 }
 .span-header {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }
 p {
   font-size: 16px;
   font-weight: 400;
   text-align: left;
 }
 .span-a{
  font-size:16px ;
 }
 .body{
  flex-direction:column ;
  text-align:left ;
 }
 .image{
    width:auto ;
    height:230px ;
  }
 }
`;

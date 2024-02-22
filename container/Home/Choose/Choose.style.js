import styled from "styled-components";

export const ChooseContainer = styled.div`
  padding: 6% 6%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  span {
    font-size: 48px;
    font-weight: 500;
    text-decoration: underline;
    text-align: center;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom:10px ;
  }

  .slider-body {
    display: flex;
    padding: 3%;
    background-color: rgba(193, 232, 255, 0.2);
    justify-content: center;
    gap:60px;
  }
  .text {
    text-align: left;
    width: 40%;
  }
 
  @media screen and (max-width: 786px) {
   
   .slider-body{
    flex-direction:column-reverse ;
    justify-content:center ;
   }
   .image{
    text-align:center ;
    width:300px ;
    height:240px ;
   }
   .text{
    width:100% ;
    text-align:center ;
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
   text-align: center;
 }
 
 }
`;

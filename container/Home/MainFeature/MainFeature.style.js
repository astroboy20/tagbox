import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0% 6% 2% 6%;
  text-align: center;
  display:flex ;
  flex-direction:column ;
  gap:10px;
  span {
    font-size: 40px;
    font-weight: 500;
    text-decoration: underline;
    text-align: center;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
  }
  .box {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    overflow-x:auto ;
    width:100% ;
    align-items:center ;
    gap:20px;
    padding-top:30px ;
    
  }
  .sub-box {
    display: flex;
    flex-direction: column;
    align-items:center ;
    justify-content:left ;
    gap:20px;
    width: 100%;
    background-color:rgba(230, 246, 255, 0.2) ;
    box-shadow:1px 1px rgba(3, 25, 59, 0.12) ;
  }
  .box::-webkit-scrollbar{
    display:none ;
  }
  .sub-box p {
    font-size: 16px;
    padding-bottom:2% ;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
  }

  .image {
    text-align: center;
    width: auto;
    height: 300px;
  }

  @media screen and (max-width: 786px) {
   
   
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
  .box{
    /* justify-content:center ; */
  }
  .sub-box{
    width:100% ;

  }
  .sub-box p {
    font-size: 18px;
  }
  }
`;




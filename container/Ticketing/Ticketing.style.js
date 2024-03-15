import styled from "styled-components";

export const TicketingStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
  }
  .header {
    margin-top: 80px;
    background: url("/images/ticket-bg.png");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header span {
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    color: #fff;
    text-decoration: underline;
  }
  .body {
    padding: 2% 6%;
  }
  .body .options p {
    padding-bottom: 2%;
    display: flex;
    gap: 25px;
    font-size:24px ;
  }
  .event-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding-top: 10px;
    width: 100%;
  }
  .sub-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 30%;
  }
  .image-box {
    padding: 20px 10px;
    background-color: rgba(230, 246, 255, 0.2);
    box-shadow: 1px 1px rgba(3, 25, 59, 0.12);
  }
  .sub-box label {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size:20px ;
  }
  .radio-input {
    display: flex;
    gap: 10px;
    align-items:center ;
  }
  .radio-input label{
    font-size:18px ;
    font-weight:400 ;
  }
  form {
    padding: 3% 0 2% 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .event-display span {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }

  .event-display {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .event-display div {
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
  }
  

  //buy ticket style
  .latest-event span,
  .other-event span {
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
  }

  @media screen and (max-width: 786px) {
    .header {
      margin-top: 60px;
      height: 200px;
      width: 100%;
      background-size:cover ;
    }
    .header span {
      font-size: 24px;
      line-height: 24px;
    }
    .body {
      padding: 6%;
    }
    .options p {
      justify-content: space-between;
      gap: 0;
      font-size: 20px;
      line-height: 24px;
    }
    .event-box {
      justify-content: left;
    }
    .image-box {
      width: 120px;
      height: 120px;
    }
    .sub-box {
      width: 45%;
      justify-content: none;
    }
  
    
    

    //buy ticket style
  .latest-event span,
  .other-event span {
    font-size: 24px;
  }
  }
`;

export const BodyStyle = styled.div`
  display: flex;
  gap: 60px;
  box-shadow:2px 4px 4px 0px #0000001F;
  border: 1px solid #020d1e4d;
  padding: 3%;
  margin:2% 0  3% 0 ;
  .text{
    display:flex ;
    flex-direction:column ;

    gap:20px;
  }
  .text .span-header {
    font-size: 28px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
  }

 .text  p {
    font-size: 20px;
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
    text-align: left;
    gap: 30px;
  }
  .text .button{
    margin-left:auto ;
  }
  .image {
    width: 500px;
    height: 320px;
  }
  .time {
    display: flex;
    text-align: left;
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
  .button .button-span {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction:column ;
    gap:20px;
    margin:5% 0  3% 0 ;
    span {
      font-size: 24px;
      font-weight: 700;
      text-decoration: underline;
      text-align: center;
    }
    .text .span-header {
    font-size: 24px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
  }
    .text p {
      font-size: 18px;
      font-weight: 400;
      text-align: justify;
    }
    .body {
      flex-direction: column;
      text-align: center;
    }
    .image {
      width: auto;
      height: 300px;
    }
  }
`;
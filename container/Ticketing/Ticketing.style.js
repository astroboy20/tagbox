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
    margin-top: 110px;
    background: url("/images/ticket-bg.png");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header span {
    font-size: 64px;
    font-weight: 700;
    line-height: 64px;
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
  .radio-input {
    display: flex;
    gap: 10px;
  }
  form {
    padding: 3% 0 2% 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .payment-method label {
    display: flex;
    gap: 10px;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
  .event-display label {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
  .payment-method span {
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
  }
  .event-display span {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
  }

  .payment-method .input,
  .event-display .input {
    display: flex;
    padding: 20px 0;
    gap: 40px;
  }

  //buy ticket style
  .latest-event span,
  .other-event span {
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
  }

  @media screen and (max-width: 786px) {
    .header {
      margin-top: 100px;
      height: 180px;
      width: 100%;
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
      font-size: 24px;
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
    .radio-input label {
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
    }
    .payment-method {
      padding: 20px 0px;
    }
    .payment-method span,
    .event-display span {
      font-size: 18px;
    }
    .payment-method .input {
      flex-wrap: wrap;
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
  border: 1px solid #020d1e4d;
  padding: 3%;
  margin:2% 0  3% 0 ;
  .text .span-header {
    font-size: 40px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
  }

 .text  p {
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
  .image {
    width: 600px;
    height: 320px;
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
  .button .button-span {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  @media screen and (max-width: 786px) {
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
      width: 320px;
      height: 230px;
    }
  }
`;

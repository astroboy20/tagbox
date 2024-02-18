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
    margin-top: 100px;
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

  @media screen and (max-width: 786px) {
    .header {
      margin-top: 110px;
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
  }
`;

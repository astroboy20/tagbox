import styled from "styled-components";

export const SingleEventStyle = styled.div`
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
    padding: 0% 3%;
  }

  .body .options p {
    gap: 25px;
  }

  form {
    padding: 2% 0 2% 0;
    display: flex;
    flex-direction: column;
    gap: 65px;
  }

  .event-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
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

  .sub-box label {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }

  .image-box {
    padding: 20px 10px;
    background-color: rgba(230, 246, 255, 0.2);
    box-shadow: 1px 1px rgba(3, 25, 59, 0.12);
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .radio-input {
    display: flex;
    gap: 10px;
  }

  .event-display {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .event-display div {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
  }
  .event-display label {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }

  .event-display span {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
  }
  .event-display .colors {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
  }
  .event-display .color {
    width: 294px;
    height: 200px;
  }
  .event-display .sub-color {
    width: 294px;
    height: 140px;
  }

  .event-display .images {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    text-align: center;
  }
  .event-display .image {
    width: 400px;
    height: 500px;
  }
  .event-display .image-button {
    display: flex;
    gap: 10px;
    align-items: center;
    gap: 150px;
    text-align: center;
  }
  .event-display .image-button .image {
    width: 600px;
    height: 400px;
  }
  .event-display .image-button .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .event-display .image-button .buttons p {
    text-decoration: underline;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }

  @media screen and (max-width: 786px) {
    .header {
      margin-top: 60px;
      height: 200px;
      width: 100%;
      background-size: cover;
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
    form {
      gap: 50px;
    }
    .radio-input label {
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
    }

    .event-display span {
      font-size: 18px;
    }
    .event-display div {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
    }
    .event-display .colors {
      gap: 10px;
      /* justify-content:center ; */
    }
    .event-display .color {
      width: 150px;
      height: 70px;
    }
    .event-display .sub-color {
      width: 150px;
      height: 60px;
    }
    .event-display .images {
      justify-content: center;
      gap: 5px;
    }
    .event-display .image {
      width: 110px;
      height: 150px;
    }
    .event-display .image-button {
      gap: 10px;
    }
    .event-display .image-button .image {
      width: 150px;
      height: 100px;
    }
    .event-display .image-button .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }
    .event-display .image-button .buttons p {
      font-size: 12px;
      font-weight: 500;
      line-height: 12px;
    }
    .copy-generate p {
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;


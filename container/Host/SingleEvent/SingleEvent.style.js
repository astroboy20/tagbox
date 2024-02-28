import styled from "styled-components";

export const SingleEventStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width:100% ;
  p {
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
  }
  .header {
    margin-top: 100px;
    background: url("/images/event-bg.png");
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
    padding: 0% 3%;
  }

  .body .options p {
    gap: 25px;
  }

  form {
    padding: 2% 4%;
    display: flex;
    flex-direction: column;
    gap: 65px;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
  }

  .radio-input {
    display: flex;
    gap: 10px;
  }

  .event-box-gift {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    padding-top: 10px;
    width: 100%;
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
  .event-display label {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }

  .event-display span {
    font-size: 20px;
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
  .wishlist {
    display: flex;
    flex-direction: column;
  }

  .wishlist .input {
    display: flex;
    flex-direction: row;
    align-items: center; 
    margin-bottom: 10px;
    width:100%; 
  }

  @media screen and (max-width: 1024px) {
    .header {
      margin-top: 60px;
      height: 200px;
      background-size: cover;
    }
    .header span {
      font-size: 24px;
      line-height: 24px;
    }
    .body {
      padding: 3%;
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
  
    .event-display .images {
      justify-content: center;
      gap: 10px;
    }
    .event-display .image {
      width: 200px;
      height: 250px;
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

    .wishlist .input {
      display: flex;
      flex-direction: column;
      align-items: center; 
      margin-bottom: 10px; 
    }
  }
`;

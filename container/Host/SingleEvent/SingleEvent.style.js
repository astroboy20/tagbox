import styled from "styled-components";

export const SingleEventStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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

  .event-display .radio-input label {
    font-size: 18px;
    font-weight: 400;
    line-height: 16px;
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

  .wishlist {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .wishlist span {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  .wishlist label {
    font-size: 20px;
    /* font-weight: 500; */
    line-height: 24px;
  }

  .wishlist .input {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  .wishlist input {
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    outline: none;
    border: 1px solid rgba(47, 46, 65, 0.2);
    padding: 16px 20px;
    width: 100%;
  }

  .actions{
    display:flex ;
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
      gap: 100px;
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
      align-items: center;
      margin-bottom: 10px;
    }
    .wishlist input {
      width: 100%;
    }
  }
`;


export const Actions = styled.div`

  display:flex ;
  flex-direction:column ;
  gap:20px;
`
export const Buttons = styled.div`

  display:flex ;
  gap:20px;
`
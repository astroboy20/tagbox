import styled from "styled-components";

export const AttendStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  .header {
    margin-top: 80px;
    background: url("/images/event-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    color: #fff;
    font-weight: 700;
  }
  .birthday-header {
    margin-top: 80px;
    background: url("/images/birthday-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    color: #fff;
    font-weight: 700;
  }
  
  .body {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 4% 6%;
  }

  .welcome span,
  .location span,
  .avalability span,
  .wishlist span {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  .location,
  .avalability,
  .wishlist {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .location p,
  .wishlist p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
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
  .radio-input label {
    font-size: 18px;
    font-weight: 400;
  }
  .button {
    /* width: fit-content !important; */
    height: Hug (52px);
    width: 32%;
    padding: 16px 20px;
    border-radius: 4px;
    border: 1px solid black;
    gap: 10px;
    background: none;
    font-family: Space Grotesk;
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
    .header {
      margin-top: 75px;
      background: url("/images/event-bg.svg");
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
    .birthday-header {
      margin-top: 75px;
      background: url("/images/birthday-bg.svg");
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
    .body {
      gap: 40px;
    }
  

    .welcome span,
    .location span,
    .avalability span,
    .wishlist span {
      font-size: 18px;
    }

    .location p,
    .wishlist p {
      font-size: 16px;
    }
    .image {
      width: 200px;
      height: 400px;
    }
    .button {
      width: fit-content;
    }
  }
`;

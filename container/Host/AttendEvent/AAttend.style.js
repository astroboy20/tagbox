import styled from "styled-components";

export const AttendStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  .header {
    margin-top: 80px;
    background: url("/images/manage-bg.svg");
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
    width: fit-content;
    padding: 16px 20px;
    border-radius: 4px;
    border: 1px solid black;
    gap: 10px;
    background: none;
    font-family: Space Grotesk;
    font-size: 20px;
  }

  .wishlist .confirm {
    /* width:fit-content ; */
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    color: #fff;
    gap: 10px;
    background: black;
    font-family: Space Grotesk;
    font-size: 16px;
  }
  .wishlist .unconfirm {
    /* width:fit-content ; */
    padding: 10px 20px;
    border-radius: 4px;
    /* color:#fff ; */
    gap: 10px;
    border: 1px solid black;
    background: none;
    font-family: Space Grotesk;
    font-size: 16px;
  }
  .input-input {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    outline: none;
    border: 1px solid rgba(47, 46, 65, 0.2);
    padding: 10px 20px;
    font-size: 16px;
    width: 100%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: black;
    color: white; /* Text color */
  }
  .imageRef {
    width: 400px;
    height: 560px;
  }
  .dress {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .wishes {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .wishes span {
    font-size: 24px;
    text-decoration: underline;
    font-weight: 500;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .wishes-created .a {
    font-size: 20px;
    font-weight: 500;
  }
  .wishes-created .b {
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
  }
  @media screen and (max-width: 1024px) {
    .table {
      overflow-x: scroll;
      width: 100%;
    }
    th,
    td {
      padding: 8px 30px;
      text-align: left;
    }
    .header {
      margin-top: 75px;
      background: url("/images/manage-bg.svg");
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
    .imageRef {
      width: 200px;
      height: 400px;
    }
    .button {
      width: fit-content;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  .input-input {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    outline: none;
    border: 1px solid rgba(47, 46, 65, 0.2);
    padding: 16px 20px;
    font-size: 16px;
    width: 100%;
    font-family: Space Grotesk;
  }
  .dark-button {
    border: none;
    padding: 16px 20px;
    border-radius: 4px;
    background-color: #020d1e;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    font-family: Space Grotesk;

    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 786px) {
    .dark-button {
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

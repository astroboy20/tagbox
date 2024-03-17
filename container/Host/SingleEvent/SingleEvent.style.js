import styled from "styled-components";

export const SingleEventStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  p {
    font-size: 32px;
    font-weight: 500;
    /* line-height: 32px; */
  }
  .header {
    margin-top: 80px;
    background: url("/images/event-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }

  .birthday-header {
    margin-top: 80px;
    background: url("/images/birthday-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }

  .graduation-header {
    margin-top: 80px;
    background: url("/images/graduation-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }
  .conference-header {
    margin-top: 80px;
    background: url("/images/conference-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }
  .shower-header {
    margin-top: 80px;
    background: url("/images/baby-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }
  .hangout-header {
    margin-top: 80px;
    background: url("/images/hangout-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
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
    gap: 75px;
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
  }
  .event-display label {
    font-size: 18px;
    font-weight: 500;
  }

  .event-display span {
    font-size: 18px;
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
  }
  .wishlist label {
    font-size: 18px;
  }

  .wishlist .input {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  .wishlist .upload-aso {
    display: flex;
    width: 25%;
    border-radius: 4px;
    padding: 16px 20px;
    gap: 10px;
    background: none;
    font-family: Space Grotesk;
    font-size: 16px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    justify-content:center ;
  }
  .wishlist .upload-aso .success-image {
    display: flex;
   gap:10px;
   align-items:center ;

  }
  .wishlist input {
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    outline: none;
    border: 1px solid rgba(47, 46, 65, 0.2);
    padding: 16px 20px;
    width: 100%;
  }

  .actions {
    display: flex;
  }
  .iv-image {
    width: 400px;
    height: 560px;
  }
  .names .name-one {
    position: absolute;
    top: 165px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Elephant;
    font-size: 35px;
    font-style: italic;
    font-weight: 400;
    text-align: center;
    color: #3a0452;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 30px;
    width: calc(200px + 20px);
  }

  .qr p {
    position: absolute;
    top: 310px;
    left: 87%;
    transform: translateX(-50%);
    font-family: Bell MT;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #fff6e5;
    display: flex;
    gap: 20px;
  }
  .time p {
    position: absolute;
    top: 370px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Bell MT;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #fff6e5;
    display: flex;
    gap: 20px;
  }

  .location p {
    position: absolute;
    top: 420px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Bell MT;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #fff6e5;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 20px;
    width: fit-content;
    width: calc(200px + 20px);
  }

  .ticket p {
    position: absolute;
    top: 500px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Bell MT;
    font-size: 16px;
    font-weight: 700;
    color: #fff6e5;
    text-align: center;
    width: calc(200px + 20px);
  }
  .dark-button {
    border: none;
    padding: 16px 12px;
    border-radius: 4px;
    background-color: #020d1e;
    color: #c1e8ff;
    cursor: pointer;
  }
  .bank {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .bank select {
    /* width:20% ; */
    border: 1px solid black;
    padding: 16px 20px;
    border-radius: 4px;
  }
  .bank .in-border {
    display: flex;
    justify-content: space-between;
  }
  .bank .input-border {
    box-shadow: none;
    /* border:none ; */
    border-bottom: 2px solid black;
    outline: none;
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0px;
  }
  .bank .input-border label {
    font-size: 20px;
  }

  .invitation-card {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    .header {
      margin-top: 75px;
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
    .birthday-header {
      margin-top: 75px;
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
    .graduation-header {
      margin-top: 75px;
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
    .conference-header {
      margin-top: 75px;
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
    .shower-header {
      margin-top: 75px;
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
    .hangout-header {
      margin-top: 75px;
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
  
    .body {
      padding: 3%;
    }

    form {
      gap: 70px;
    }
    .radio-input{
      align-items:center ;
    }
    .radio-input label {
      font-size: 16px;
      font-weight: 400;
    }

    .event-display span {
      font-size: 18px !important;
    }
   
    .event-display div {
      font-size: 20px;
      font-weight: 500;
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

    .wishlist .upload-aso {
      display: flex;
      width: 100%;
      font-size: 10px;
      align-items: center;
    }
    .dark-button {
      border: none;
      padding: 16px 12px;
      border-radius: 4px;
      background-color: #020d1e;
      color: #c1e8ff;
      cursor: pointer;
      width: 100%;
    }
    .wishlist .upload-aso label {
      font-size: 12px;
    }
    .bank .in-border {
    display: flex;
    flex-direction:column ;
    gap:30px;
  }
  .bank .input-border {
    box-shadow: none;
    /* border:none ; */
    border-bottom: 2px solid black;
    outline: none;
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0px;
  }
  .bank .input-border label {
    font-size: 18px;
  }
    .iv-image {
      width: 170px;
      height: 252px;
    }
    .names .name-one {
      top: 50px;
      left: 10%;
      font-size: 2000px;
      gap: 10px;
      width: calc(100% - 40px); /* Adjust as needed */
    }

    .qr p,
    .time p,
    .location p,
    .ticket p {
      font-size: 14px;
      gap: 10px;
      width: calc(100% - 40px); /* Adjust as needed */
    }
    .invitation-card {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
export const Edit = styled.div`
  position: relative;
  z-index: -100;
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  span {
    font-size: 48px;
    font-weight: 500;
  }
  @media screen and (max-width: 786px) {
    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
export const Buttons = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 20px;
  .white-btn {
    border: none;
    padding: 16px 12px;
    border-radius: 4px;
    background-color: #fff;
    font-size: 24px;
    font-weight: 500;

    color: #000;
    cursor: pointer;
  }
  .dark-button {
    border: none;
    padding: 16px 12px;
    border-radius: 4px;
    background-color: #020d1e;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;

    color: #fff;
    cursor: pointer;
  }
  .link {
    color: #fff;
    /* font-size:24px ; */
    font-weight: 400;
    text-decoration: none;
  }
  .link-white {
    color: #000;
    /* font-size:24px ; */
    font-weight: 400;
    text-decoration: none;
  }
  @media screen and (max-width: 786px) {
    .white-btn,
    .dark-button {
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

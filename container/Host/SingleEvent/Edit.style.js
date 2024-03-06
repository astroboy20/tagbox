import styled from "styled-components";

export const Edit = styled.div`
  position: relative;
  z-index: -100;

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

  .name {
    position: absolute;
    top: 310px;
    left: 70%;
    transform: translateX(-50%);
    font-family: Garamond;
    font-size: 69px;
    font-weight: 700;
    line-height: 77px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 30px;
    width: calc(200px + 20px);
  }
  .age {
    position: absolute;
    top: 370px;
    left: 70%;
    transform: translateX(-50%);
    font-family: Garamond;
    font-size: 70px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 30px;
    width: calc(200px + 20px);
  }
  .date-time {
    position: absolute;
    top: 435px;
    left: 60%;
    transform: translateX(-50%);
    font-family: Garamond;
    text-align: center;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 30px;
    width: calc(200px + 20px);
  }
  .date-time p {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0em;
  }
  .address {
    position: absolute;
    top: 480px;
    left: 57%;
    transform: translateX(-50%);
    font-family: Garamond;
    text-align: center;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 30px;
    width: calc(200px + 20px);
    font-size: 16000px;
  }
  .address p {
    font-size: 10px;
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
  .qr-birth p {
    position: absolute;
    top: 455px;
    left: 85%;
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

  .button {
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
`;

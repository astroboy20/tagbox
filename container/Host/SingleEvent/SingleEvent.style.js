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
    padding: 0% 6%;
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
    gap: 25px;
  }
  .event-display div {
    font-size: 40px;
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
      font-size: 24px;
      font-weight: 700;
      line-height: 40px;
    }
  }
`;

export const ColorStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 10px;
  width: 100%;
  
  .sub-box {
    display: flex;
    flex-direction: column;
    width:23% ;
    
   
  }
   .a {
    background-color: #3976a2;
    height: 120px;
    border-radius: 8px;
  }
  .sub-box .b {
    background-color: #e9e6dd;
    height: 120px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    padding-top:20px ;
  }
  .sub-box .c {
    background-color: #274140;
    height: 120px;
    border-radius: 8px;
  }
  .sub-box .d {
    background-color: #99BC44;
    height: 100px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    padding-top:20px ;
  }
  .sub-box .e {
    background-color: #3F4D98;
    height: 120px;
    border-radius: 8px;
  }
  .sub-box .f {
    background-color: #E47178;
    height: 100px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    padding-top:20px ;
  }
  .sub-box .g {
    background-color: #E09BAD;
    height: 120px;
    border-radius: 8px;
  }
  .sub-box .h {
    background-color: #DCDDDF;
    top: -90px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    padding-top:20px ;
  }
  .sub-box .e {
    background-color: #3F4D98;
    height: 120px;
    border-radius: 8px;
  }
  .sub-box .f {
    background-color: #E47178;
    top: -90px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    padding-top:20px ;
  }
  .sub-box .e {
    background-color: #3F4D98;
    height: 120px;
    border-radius: 8px;
  }
  .sub-box .f {
    background-color: #E47178;
    top: -90px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    padding-top:20px ;
  }
`;

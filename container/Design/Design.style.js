import styled from "styled-components";

export const DesignStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    margin-top: 110px;
    background: url("/images/design-bg.png");
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
  .body{
    padding:2% 6% ;
  }
  .body p {
    font-size: 28px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
  }
  .input-button{
    display:flex ;
    gap: 10px;
  }
  .body .input {
    width: 100%;
    display: flex;
    justify-content:space-between ;
    padding: 5px;
    background-color: #fff;
    border-radius: 4px;
    border:1px solid #000 ;
  }
  .body input {
    /* width: 85%; */
    border: none;
    outline: none;
    color: rgba(3, 5, 59, 0.4);
  }
  .button{
    padding:10px 20px ;
    border:1px solid #020D1E80 ;
    background: none ;
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
      padding:0% 6%;
    }
    .body p{
        font-size:18px ;
    }
    .input {
      width: 80%;
      margin: 0 auto;
    }
    input {
      /* width: 60%; */
      /* padding: 5px 0 5px; */
    }
  }
`;

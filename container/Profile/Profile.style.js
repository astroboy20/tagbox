import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin-top: 100px;
  display: inline-flex;
  width: 100%;
  .left {
    width: 40%;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);

    .options {
      font-size: 24px;
      display: flex;
      flex-direction: column;
      gap: 50px;
      padding: 7% 0 4% 15%;
    }
  }
  .right {
    width: 60%;
  }
  @media screen and (max-width: 1024px) {
    .left {
      display: none;
      width: 0;
    }
    .right {
      width: 100%;
    }
  }
`;
export const EditContainer = styled.div`
  padding: 6% 6%;
  .header {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .header p {
    text-decoration: underline;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
  .image {
    width: 160px;
    height: 160px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2%;
    
  }
  .name,
  .email-number {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .input {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    outline: none;
    border: 1px solid rgba(47, 46, 65, 0.2);
  }
  input {
    /* width: 85%; */
    border: none;
    outline: none;
    color: rgba(3, 5, 59, 0.4);
  }
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .input-container label {
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
  }
  .button {
    width: fit-content;
    border-radius: 4px;
    padding: 16px 20px;
    display: flex;
    margin-left: auto;
    background-color: #020d1e;
    color: #fff;
    border: none;
  }
  @media screen and (max-width: 1024px) {
    .name,
    .email-number {
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .right {
      width: 100%;
    }
    .input-container label {
      font-size: 16px;
      font-weight: 500;
      line-height: 16px;
    }
    .input {
      width: 100%;
      padding: 5px;
    }
  }
`;

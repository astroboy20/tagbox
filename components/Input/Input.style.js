import styled from "styled-components";

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }
  .password {
    display: flex;
    align-items: center;
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    padding-right: 10px;
    border: 1px solid rgba(47, 46, 65, 0.2);
  }
  @media screen and (max-width: 1024px) {
    label {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
    }
    span{
      font-size:16px ;
    }
  }
`;
export const InputDiv = styled.input`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
  outline: none;
  border: 1px solid rgba(47, 46, 65, 0.2);
  padding: 16px 20px;
  /* width: 100%; */
`;
export const PasswordStyle = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 16px 20px;
`;

export const EventStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .email{
    display:flex ;
    flex-direction:column ;
  }
  .email-details{
    display:flex ;
    border:none ;
  }
  .input-p{
    font-size: 20px !important;
    font-weight: 500 !important;
  }
  div {
    display: flex;
    border-bottom: 1px solid #000;
    justify-content:space-between ;
    
  }
  label {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }
  span {
    font-size: 20px;
    font-weight: 500;
    margin-bottom:10px ;
  }
  p{
    font-size: 20px;
    font-weight: 400;
    padding:0 ;
  }
  .qr-code p{
    font-size:20px  !important;
    font-weight: 500;
    padding:0 ;
  }
 
  .copy-generate{
    display:flex ;
    gap:20px;
    cursor: pointer;
    
  }
  .qr-input{
    display:flex ;
    flex-direction:column ;
  }
  .copy-generate p {
    font-size: 20px !important;
    font-weight: 500 !important ;
    cursor: pointer;
  }
  .button{
    background-color:black ;
    color:white ;
    border-radius:4px ;
    padding:5px 30px ;
    margin-bottom:5px ;
    font-size:20px ;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    label {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
    }
    span{
      /* display:none ; */
    }
    p{
      font-size:16px ;
    }
    h1{
      display:none ;
    }

    
    .copy-generate, .qr-input{
    display:flex ;
    flex-direction:column ;
    font-size: 16px !important;
    font-weight: 500 !important;
    cursor: pointer;
    
  }
    .copy-generate p {
    font-size: 16px !important;
    font-weight: 500 !important;
    cursor: pointer;
    
  }
  }
`;
export const EventDiv = styled.input`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  outline: none;
  border: none;
  /* border: 1px solid rgba(47, 46, 65, 0.2); */
  width: 500px;
  padding: 10px 0;
  font-size:16px ;
  text-align:left ;

  @media screen and (max-width: 1024px) {
    width: auto ;
    
  }
  
`;

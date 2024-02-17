import styled from "styled-components";

export const TicketingStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
  }
  .header {
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
    padding: 2% 6%;
  }
  .options{
    display:flex ;
    gap:20px;
    padding-bottom:2% ;
  }
  .event-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-top: 10px;
  }
  .sub-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 30%;;
    
    
  }
  .image-box{
    padding:20px 10px;
    background-color: rgba(230, 246, 255, 0.2);
    box-shadow: 1px 1px rgba(3, 25, 59, 0.12);
  }
  .sub-box label {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
  .radio-input{
    display: flex;
    gap:10px;
  }
  form{
    padding:4% 0 ;
    display:flex ;
    flex-direction:column ;
    gap:60px;
  }
`;

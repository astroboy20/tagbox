import styled from "styled-components";

export const ManageStyle = styled.div`
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
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }

  .body {
    padding: 3% 6%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .boxes {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 15px;
  }
  .sub-box-1 {
    background-color: #f1f4fd;
    width: 35%;
    border: 0.3px solid #020d1e33;
    box-shadow: 2px 2px 4px 0px #0000001f;
    padding: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 180px;
  }
  .sub-box-2 {
    background-color: #fcf8ed;
    width: 35%;
    border: 0.3px solid #020d1e33;
    box-shadow: 2px 2px 4px 0px #0000001f;
    padding: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 180px;
  }
  .sub-box-3 {
    background-color: #fdf3f1;
    width: 35%;
    border: 0.3px solid #020d1e33;
    box-shadow: 2px 2px 4px 0px #0000001f;
    padding: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 180px;
  }

  .sub-box-1 .heading,
  .sub-box-2 .heading,
  .sub-box-3 .heading {
    font-size: 24px;
    font-weight: 500;
  }
  .sub-box-1 p,
  .sub-box-2 p,
  .sub-box-3 p {
    font-size: 28px;
    font-weight: 500;
  }
  .events,
  .wishes {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .events span,
  .wishes span {
    font-size: 24px;
    text-decoration: underline;
    font-weight: 500;
  }

  .events .created-events {
    display: flex;
    justify-content: space-between;
  }
  .created-events p {
    font-size: 18px;
    font-weight: 400;
  }
  .button {
    border: none;
    padding: 5px 15px;
    color: #fff;
    background-color: #000;
    border-radius: 4px;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .wishes-created .a {
    font-size: 18px;
    font-weight: 500;
  }
  .wishes-created .b {
    font-size: 18px;
    font-weight: 400;
    text-align:justify ;
  }

  @media screen and (max-width: 1024px){
    .header {
      margin-top: 75px;
      /* background: url("/images/event-bg.svg"); */
      height: 200px;
      background-size: cover;
      font-size: 24px;
    }
    .boxes{
        flex-direction:column ;
    }
    .sub-box-1,.sub-box-2,.sub-box-3{
        width:100% ;
        padding:4% ;
       
    }
  }
`;

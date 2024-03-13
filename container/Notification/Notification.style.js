import styled from "styled-components";

export const NotificationStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 3% 6%;
  margin-bottom:20px ;
  .header {
    margin-top: 100px;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
  }
  .item{
    display:flex ;
    flex-direction:column ;
    gap:15px;
    border-bottom:.5px solid black ;
  }
  .item .big {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
  }
  .item .small {
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    padding-bottom: 20px;
  }
`;

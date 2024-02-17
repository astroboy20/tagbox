import styled from "styled-components";

export const FAQSContainer = styled.div`
  padding: 3% 6%;
  background: rgba(2, 13, 30, 1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  span {
    font-size: 48px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0em;
    text-decoration: underline;
    color: #fff;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
  .box {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .sub-box {
    color: rgba(2, 13, 30, 1);
    background: #f3faff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
  }
`;

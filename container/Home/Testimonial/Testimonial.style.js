import styled from "styled-components";

export const TestimonialStyle = styled.div`
  padding:6%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-size: 48px;
    font-weight: 500;
    text-decoration: underline;
    text-align: center;
  }
  .box .sub-box p {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
  }
  .sub-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding:10px ;
    width: 29%;
    /* margin:2% ; */
    background-color: rgba(230, 246, 255, 0.2);
    box-shadow: 1px 1px rgba(3, 25, 59, 0.12);
  }
 
`;

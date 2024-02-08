import styled from "styled-components";

export const FooterContainer = styled.div``;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 6%;
    .left{
        display:flex ;
        flex-direction: column;
        gap:5px;
    }
  span {
    font-size: 28px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
  }
  .icon{
    display:flex ;
    gap:10px;
  }
`;
export const BottomContainer = styled.div`
  background-color: #03193b;
  display: flex;
  justify-content: space-between;
  padding: 1% 6%;
  p {
    font-size: 28px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    color: #fff;
  }
`;

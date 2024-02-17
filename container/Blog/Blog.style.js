import styled from "styled-components";

export const BlogContainer = styled.div`
  .header {
    background: url("images/blog-bg.png");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .header span {
    font-size: 64px;
    font-weight: 500;
    line-height: 64px;
    text-align: center;
    text-decoration: underline;
  }
  .body {
    display: flex;
    gap: 20px;
    text-align: justify;
    flex-direction:column ;
    padding:3% 6% ;
  }

  .body span {
    font-size: 32px;
    font-weight: 500;
    line-height: 36px;
    text-decoration:underline ;
  }
`;

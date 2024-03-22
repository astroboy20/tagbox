import styled from "styled-components";

export const BlogContainer = styled.div`
  padding-top: 80px;
  .header {
    background: url("images/blog-bg.png");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .header span {
    font-size: 48px;
    font-weight: 500;
    line-height: 64px;
    text-align: center;
    text-decoration: underline;
  }
  .body {
    display: flex;
    gap: 20px;
    text-align: justify;
    flex-direction: column;
    padding: 3% 6%;
  }

  .body span {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-decoration: underline;
  }

  @media screen and (max-width: 786px) {
    padding-top: 75px;
    .header {
      /* padding-top: 75px; */
      height: 200px;
      width: 100%;
      background-position:center;
    background-size:cover ;
      
    }
    .header span {
      font-size: 24px;
      line-height: 24px;
    }
    .body {
      padding: 6%;
    }
    .body span {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

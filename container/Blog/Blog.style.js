import styled from "styled-components";

export const BlogContainer = styled.div`
  padding-top: 110px;
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
    flex-direction: column;
    padding: 3% 6%;
  }

  .body span {
    font-size: 32px;
    font-weight: 500;
    line-height: 36px;
    text-decoration: underline;
  }

  @media screen and (max-width: 786px) {
    .header {
      padding-top: 100px;
      height: 180px;
      width: 100%;
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

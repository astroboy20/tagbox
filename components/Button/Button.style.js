import styled from "styled-components";

export const NavButton = styled.button`
  padding: 14px, 12px;
  border-radius: 4px;
  background-color: #c1e8ff;
  color: #020d1e;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 786px) {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const TransparentButton = styled.button`
  padding: 14px 12px;
  border-radius: 4px;
  border: 1px solid #c1e8ff;
  background: none;
  color: #c1e8ff;
  cursor: pointer;
  font-size: 20px;
  @media screen and (max-width: 786px) {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const DarkButton = styled.button`
  border: none;
  padding: 16px 12px;
  border-radius: 4px;
  background-color: #020d1e;
  color: #c1e8ff;
  cursor: pointer;

  @media screen and (max-width: 786px) {
    font-weight: 500;
    font-size: 16px;
    padding: 8px, 10px, 8px, 10px;
    border-radius: 4px;
    gap: 8px;
  }
`;
export const DarkTransparent = styled.button`
  padding: 14px 12px;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;

  border: 1px solid #000;
  background: none;
  color: #000;
  cursor: pointer;
  @media screen and (max-width: 786px) {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
  }
`;

export const DarkWhite = styled.button`
  border: none;
  padding: 16px 12px;
  border-radius: 4px;
  background-color: #020d1e;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;

  color: #fff;
  cursor: pointer;
  @media screen and (max-width: 786px) {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
  }
`;
export const WhiteBtn = styled.button`
  border: none;
  padding: 16px 12px;
  border-radius: 4px;
  background-color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;

  color: #000;
  cursor: pointer;
  @media screen and (max-width: 786px) {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
  }
`;

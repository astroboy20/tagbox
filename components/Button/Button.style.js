import styled from "styled-components";

export const NavButton = styled.button`
  padding: 14px, 12px;
  border-radius: 4px;
  background-color: #c1e8ff;
  color: #020d1e;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 786px) {
   font-weight:500 ;
   font-size:18px ;
  }
`;

export const TransparentButton = styled.button`
  padding: 14px 12px;
  border-radius: 4px;
  border: 1px solid #c1e8ff;
  background: none;
  color: #c1e8ff;
  cursor: pointer;
  @media screen and (max-width: 786px) {
   font-weight:500 ;
   font-size:18px;
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
   font-weight:500 ;
   font-size:18px;
  }
`;

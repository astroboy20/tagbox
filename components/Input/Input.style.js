import styled from "styled-components";

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap:5px;
  .password {
    display: flex;
    align-items: center;
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    padding-right:10px ;
    border: 1px solid rgba(47, 46, 65, 0.2);
  }
`;
export const InputDiv = styled.input`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
  outline: none;
  border: 1px solid rgba(47, 46, 65, 0.2);
  padding: 10px 20px;
`;
export const PasswordStyle = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 20px;
`;

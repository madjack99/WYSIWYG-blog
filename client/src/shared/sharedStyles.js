import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Button = styled.button`
  background: salmon;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;

export const linkStyle = css`
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120px;
  padding: 10px 15px;
  border-radius: 5px;
  background: skyblue;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
`;

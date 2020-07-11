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

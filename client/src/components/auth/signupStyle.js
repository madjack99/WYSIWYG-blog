import styled from '@emotion/styled';

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
  height: 100px;
  padding: 10px 15px;
  border-radius: 5px;
  background: skyblue;
`;

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

import styled from 'styled-components';

const DeleteBtn = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.btnBorder};
  cursor: pointer;
  background-color: ${({ theme }) => theme.btnBackground};
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;

export default DeleteBtn;

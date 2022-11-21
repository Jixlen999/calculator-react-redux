import styled from 'styled-components';

const DeleteBtn = styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  max-width: 300px;
  height: ${({ theme }) => theme.height[2]}px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  border: ${({ theme }) => theme.borderSize[1]}px solid ${({ theme }) => theme.btnBorder};
  cursor: pointer;
  background-color: ${({ theme }) => theme.btnBackground};
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;

export default DeleteBtn;

import styled from 'styled-components';
import { BTN_FONT_SIZE, BTN_BORDER_RADIUS, BORDER_SIZE_STYLE } from '@constants/StyleConstants';

const DeleteBtn = styled.div`
  width: auto;
  height: auto;
  padding: 0 5px;
  text-align: center;
  font-size: ${BTN_FONT_SIZE};
  border-radius: ${BTN_BORDER_RADIUS};
  border: ${BORDER_SIZE_STYLE} ${({ theme }) => theme.btnBorder};
  cursor: pointer;
  background-color: ${({ theme }) => theme.btnBackground};
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;

export default DeleteBtn;

import styled from 'styled-components';
import { BORDER_SIZE_STYLE, BTN_BORDER_RADIUS, BTN_FONT_SIZE } from '@constants/StyleConstants';

const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 10vh;
  font-size: ${BTN_FONT_SIZE};
  color: ${({ theme }) => theme.mainTextColor};
  text-align: center;
  font-weight: 500;
  border-radius: ${BTN_BORDER_RADIUS};
  border: ${BORDER_SIZE_STYLE} ${({ theme }) => theme.btnBorder};
  background-color: ${({ theme }) => theme.btnBackground};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;

export default KeyWrapper;

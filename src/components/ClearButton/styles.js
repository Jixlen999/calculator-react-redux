import styled from 'styled-components';
import theme from '@src/theme';

const DeleteBtn = styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${theme.height[2]}px;
  text-align: center;
  font-size: ${theme.fontSize[4]}px;
  border-radius: ${theme.borderRadius[0]}px;
  border: ${theme.borderSize[1]}px solid ${theme.BTN_BORDER};
  cursor: pointer;
  background-color: ${theme.BTN_BG_COLOR};
  &:hover {
    background-color: ${theme.BTN_BG_COLOR_HOVER};
  }
`;

export default DeleteBtn;

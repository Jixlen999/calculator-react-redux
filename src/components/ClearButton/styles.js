import styled from 'styled-components';
import theme from '@src/theme';

const { height, fontSize, borderRadius, borderSize, btnBorder, btnBgColor, btnBgColorHover } = theme;

const DeleteBtn = styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${height[2]}px;
  text-align: center;
  font-size: ${fontSize[4]}px;
  border-radius: ${borderRadius[0]}px;
  border: ${borderSize[1]}px solid ${btnBorder};
  cursor: pointer;
  background-color: ${btnBgColor};
  &:hover {
    background-color: ${btnBgColorHover};
  }
`;

export default DeleteBtn;

import styled from 'styled-components';

export const PanelWrapper = styled.div`
  padding-right: ${({ theme }) => theme.padding[1]}px;
  height: ${({ theme }) => theme.height[6]}%;
  display: flex;
  align-items: center;
  transition: all ${({ theme }) => theme.transition[0]}s ease;
  width: ${(props) => (props.isShown ? '20%' : '2%')};
`;

export const HistoryBtn = styled.div`
  margin-left: ${({ theme }) => theme.margin[1]}px;
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  display: inline-block;
  width: ${({ theme }) => theme.fontSize[5]}px;
  cursor: pointer;
  &:hover {
    font-size: ${({ theme }) => theme.fontSize[5]}px;
  }
  transition: all ${({ theme }) => theme.transition[0]}s ease;
`;

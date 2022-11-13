import styled from 'styled-components';

export const PanelWrapper = styled.div`
  padding-right: 15px;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  width: ${(props) => (props.isShown ? '20%' : '2rem')};
`;

export const HistoryBtn = styled.div`
  margin-left: 5px;
  font-size: 2rem;
  display: inline-block;
  width: 2.2rem;
  cursor: pointer;
  &:hover {
    font-size: 2.2rem;
  }
  transition: all 0.3s ease;
`;

import styled from 'styled-components';

export const SwitcherWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Select = styled.select`
  width: 10em;
  height: 50px;
  background-color: ${({ theme }) => theme.btnBackground};
  color: ${({ theme }) => theme.mainTextColor};
  text-align: center;
  font-size: 2rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.btnBorder};
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.mainTextColor};
  font-size: 1.2rem;
  cursor: pointer;
`;

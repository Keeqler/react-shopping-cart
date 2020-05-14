import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 8px 8px;
  font-size: 16px;
  font-weight: 700;
  color: var(--primary);
  background: var(--button-background);
  background-size: 100%;
  cursor: pointer;
  transition: background 300ms;

  :hover {
    background: #175a39;
  }
`;

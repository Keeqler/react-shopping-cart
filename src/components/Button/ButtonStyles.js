import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  background: var(--secondary);
  background-size: 100%;
  cursor: pointer;
  transition: background 300ms;

  :hover {
    background: var(--primary);
  }
`;

import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const CartLink = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--text);
`;

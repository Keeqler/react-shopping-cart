import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, 260px);
  grid-gap: 12px;
  justify-content: center;
`;

export const ProductCard = styled.figure`
  width: 260px;
  display: flex;
  flex-direction: column;
  background: var(--background-secondary);
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ProductDetails = styled.figcaption`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const ProductName = styled.strong`
  margin: 4px 0 18px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ProductPrice = styled.strong`
  color: var(--primary);
  font-size: 18px;
`;

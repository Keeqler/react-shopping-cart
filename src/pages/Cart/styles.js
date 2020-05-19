import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CartTable = styled.table`
  min-height: 95px;
  width: 79%;
  table-layout: fixed;
  border-spacing: 8px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const HeadContainer = styled.thead`
  font-size: 16px;
`;

const TableHead = styled.th`
  @media only screen and (max-width: 1000px) {
    display: ${({ hideOnMobile }) => hideOnMobile && 'none'};
  }
`;

export const ImageHead = styled(TableHead)`
  width: 10%;
`;

export const DetailsHead = styled(TableHead)`
  width: 50%;

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
`;

export const QuantityHead = styled(TableHead)`
  width: 20%;

  @media only screen and (max-width: 1000px) {
    width: 40%;
  }
`;

export const TotalHead = styled(TableHead)`
  width: 16%;
`;

export const RemoveHead = styled(TableHead)`
  width: 4%;

  @media only screen and (max-width: 1000px) {
    width: 10%;
  }
`;

export const ProductRow = styled.tr`
  height: 60px;
  text-align: center;
`;

export const ProductCell = styled.td`
  height: 100%;

  @media only screen and (max-width: 1000px) {
    display: ${({ hideOnMobile }) => hideOnMobile && 'none'};
  }
`;

export const ProductImage = styled.img`
  max-height: 60px;
  border-radius: 8px;
  object-fit: contain;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProductName = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ProductPrice = styled.strong`
  color: var(--primary);
`;

export const ProductQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductQuantity = styled.strong`
  margin: 0 8px;
`;

export const ProductTotal = styled.strong`
  color: var(--primary);
`;

export const RightSideContainer = styled.aside`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  background: var(--background-secondary);
`;

export const Total = styled.strong`
  margin-top: 10px;
  font-size: 24px;
  color: var(--primary);
`;

export const ContinueBuyingLink = styled(Link)`
  margin: 10px auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  color: var(--text);
`;

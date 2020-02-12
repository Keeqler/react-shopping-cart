import styled from 'styled-components';

export default styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, 260px);
  grid-gap: 12px;
  justify-content: center;

  .product {
    width: 260px;
    display: flex;
    flex-direction: column;
    background: var(--background-2);
    border-radius: 8px;

    img {
      width: 100%;
      border-radius: 8px;
    }

    figcaption {
      width: 100%;
      padding: 8px;
      display: flex;
      flex-direction: column;
      font-size: 16px;

      span {
        margin: 4px 0 18px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      strong {
        color: var(--primary);
        font-size: 18px;
      }
    }

    button {
      border-radius: 0px 0px 8px 8px;
    }
  }
`;

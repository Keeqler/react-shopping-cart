import styled from 'styled-components';

export default styled.header`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .cart-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    transition: opacity 300ms;

    :hover {
      opacity: 0.8;
    }

    .cart-details {
      margin-right: 6px;
      display: flex;
      flex-direction: column;
      font-size: 16px;
      text-align: right;

      strong {
        color: var(--primary);
      }

      span {
        font-size: 14px;
        color: var(--neutral-2);
      }
    }

    .icon-wrapper {
      width: 36px;
      /* transform: translateY(2px); */
    }
  }
`;

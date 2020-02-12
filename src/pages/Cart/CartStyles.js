import styled from 'styled-components';

export default styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .price {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary);
  }

  table {
    width: 79%;
    table-layout: fixed;
    border-spacing: 8px;

    thead {
      th {
        font-size: 16px;
      }

      .product {
        width: 10%;
      }

      .details {
        width: 50%;
      }

      .quantity {
        width: 20%;
      }

      .total {
        width: 10%;
      }

      .remove-button {
        width: 10%;
      }
    }

    tbody tr {
      height: 60px;
      text-align: center;

      td {
        height: 100%;
      }

      .image {
        img {
          max-height: 60px;
          object-fit: contain;
        }
      }

      .details {
        .inner {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          .name {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }

      .quantity {
        .inner {
          display: flex;
          justify-content: center;
          align-items: center;

          button {
            width: 16px;
            font-size: 26px;
            color: var(--secondary);
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 300ms;

            :hover {
              opacity: 1;
            }
          }

          span {
            margin: 0 8px;
            font-weight: 700;
          }
        }
      }

      .remove-button {
        button {
          opacity: 0.8;
          transition: opacity 300ms;

          :hover {
            opacity: 1;
          }
        }
      }
    }
  }

  aside {
    width: 20%;
    height: 160px;

    .inner {
      height: 100%;
      margin-bottom: 6px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      background: var(--background-2);

      span {
        font-size: 20px;
      }

      button {
        align-self: flex-end;
      }
    }
  }
`;

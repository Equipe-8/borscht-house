import styled from 'styled-components';

export const StyledProductCard = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 5px;
  transition: 0.3s;
  width: 306px;
  height: 350px;
  background: ${({ theme }) => theme.colors.gray150};

  :has(button:hover) {
    border-color: ${({ theme }) => theme.colors.gray0};
  }

  .imageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 296px;
      height: 172px;
      border-radius: 8px 8px 0 0;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 23px 20px;

    .price {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray100};
      margin-top: 20px;
    }

    span {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray100};
    }

    .saibaMais {
      margin-left: 135px;
      margin-top: -40px;
    }
  }
`;

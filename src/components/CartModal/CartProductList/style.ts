import styled from 'styled-components';

export const StyledCartProductList = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    height: 200px;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .totalBox {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 300px;

    .total {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray300};
    }
  }
`;

export const StyledBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

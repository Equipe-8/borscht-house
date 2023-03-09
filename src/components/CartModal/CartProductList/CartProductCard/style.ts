import styled from 'styled-components';

export const StyledCartProductCard = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  .imageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: ${({ theme }) => theme.colors.gray100};

    img {
      width: 80px;
      height: 80px;
    }

    @media (max-width: 450px) {
      width: 40px;
      height: 40px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  .contentBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    gap: 20px;

    button {
      background: transparent;
      opacity: 0.4;
      transition: 0.4s;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;

export const StyledCounterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 78px;
  gap: 10px;

  background: #f5f5f591;
  border-radius: 6px;
  border: 1px dotted #00000021;

  span {
    font-size: 0.8rem;
  }
`;

export const StyledCounterBtn = styled.button`
  width: 15px;
  height: 22px;

  font-size: 0.9rem;
  font-weight: 800;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

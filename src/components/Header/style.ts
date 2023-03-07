import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.gray600};
  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    .logo {
      font-family: ${({ theme }) => theme.fonts.secundary};
      color: ${({ theme }) => theme.colors.gray100};
      font-size: 3rem;
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 60px;

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
        margin-right: 50px;

        button {
          background: transparent;
          color: ${({ theme }) => theme.colors.gray150};
          transition: 0.3s;

          :hover {
            color: ${({ theme }) => theme.colors.gray300};
          }
        }
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }

    @media (max-width: 450px) {
      .nav {
        flex-direction: column;
      }
    }
  }
`;

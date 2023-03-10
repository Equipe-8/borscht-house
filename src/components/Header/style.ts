import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.gray600};
  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    .IconeAndLogo {
      display: flex;
      align-items: center;
      margin-left: 50px;
    }
    .logo {
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.gray100};
      font-size: 3rem;
    }

    .icone {
      width: 51px;
      height: 51px;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 60px;

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
        margin-right: 50px;
        /* position: relative;
        top: -178px;
        left: 98px; */

        button {
          background: transparent;
          color: ${({ theme }) => theme.colors.secondary};
          transition: 0.3s;

          :hover {
            color: ${({ theme }) => theme.colors.gray300};
          }
        }
      }
    }

    @media (max-width: 600px) {
      max-height: 113px;
      margin-bottom: 30px;
      flex-direction: column;
      .flexGrid {
        display: flex;
        flex-direction: row;
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
        margin-right: 50px;
        position: relative;
        top: -178px;
        left: 98px;
      }

      .IconeAndLogo {
        margin-left: 0;
        position: relative;
        top: 0px;
        left: -60px;
      }

      form {
        position: relative;
        top: -7px;
        left: -8px;
      }
      .logo {
        width: 100px;
      }
    }

    @media (max-width: 450px) {
      .nav {
        flex-direction: column;
      }
    }
  }
`;

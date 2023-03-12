import styled from 'styled-components';

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('./src/assets/borscht1 OK.png');
  background-size: initial;
  background-position-x: -270px;
  overflow-y: hidden;

  @media (min-width: 500px) {
    background-size: cover;
    background-position-x: 0;
  }

  input {
    height: 50px;
    width: 100%;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.gray600};
    opacity: 64%;
    padding-left: 16px;
    font-weight: 600;
    @media (min-width: 500px) {
      height: 70px;
      width: 250px;
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 600;
    }
  }
`;

export const StyledDivLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 22px;
  }
`;

export const StyledDivMain = styled.div`
  height: 100vh;

  form {
    height: 100vh;
    margin-top: 328px;
    margin-left: -4px;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    @media (min-width: 500px) {
      width: 500px;
      margin-left: 30px;
      margin-top: 285px;
      align-items: flex-start;
    }
  }
`;

export const StyledLoginButton = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  @media (min-width: 500px) {
    width: 250px;
  }
`;

export const StyledRegisterButton = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray300};
  font-weight: 600;
  @media (min-width: 500px) {
    width: 250px;
  }
`;

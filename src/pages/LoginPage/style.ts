import styled from 'styled-components';
import borscht from '../../assets/borscht.png';

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${borscht});
  background-size: cover;
  background-position-x: -270px;
  overflow-y: hidden;

  @media (min-width: 706px) {
    background-position-x: -210px;
  }

  @media (min-width: 769px) {
    background-size: cover;
    background-position-x: 0;
  }

  input {
    height: 50px;
    width: 100%;
    border-radius: 8px;
    background-color: white;
    padding-left: 16px;
    font-weight: 600;
    border: 1px solid rgb(217, 204, 193);
    transition: border-width 0.2s linear;
    margin: 0.5em;
    :hover {
      border: 2px solid black;
    }
    @media (min-width: 769px) {
      height: 60px;
      width: 300px;
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 600;
    }
  }
`;

export const StyledDivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  p {
    font-weight: 600;
    font-size: 18px;
    font-family: ${({ theme}) => theme.fonts.primary}
  }
`;

export const StyledDivMain = styled.div`
  height: 100vh;

  form {
    height: 361px;
    margin-top: 300px;
    margin-left: 17px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 0.6);
    @media (min-width: 769px) {
      height: max-content;
      width: 400px;
      margin-left: 150px;
      margin-top: 250px;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const StyledLoginButton = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme}) => theme.fonts.primary};
  font-weight: 600;
  font-size: 16px;
  transition-duration: 0.8s;
  transition-property: ${({ theme }) => theme.colors.tertiary};
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  @media (min-width: 769px) {
    width: 300px;
    font-size: 18px;
    letter-spacing: 1px;
  }
`;

export const StyledRegisterButton = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray300};
  font-family: ${({ theme}) => theme.fonts.primary};
  font-weight: 600;
  font-size: 16px;
  transition-duration: 0.8s;
  transition-property: ${({ theme }) => theme.colors.tertiary};
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  @media (min-width: 769px) {
    width: 300px;
    font-size: 18px;
    letter-spacing: 1px;
  }
`;

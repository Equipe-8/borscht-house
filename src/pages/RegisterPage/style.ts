import styled from 'styled-components';
import borscht from '../../assets/borscht.png';

export const StyledRegisterPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${borscht});
  background-size: cover;
  background-position-x: -270px;
  overflow-y: hidden;

  .container {
    justify-content: center;
    width: 100vw;
    display: flex;
    -webkit-box-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.gray0};
  }

  .span {
    height: 80px;
    width: 50%;
    border-radius: 8px;
    margin-top: 25px;
    text-align: center;
  }

  .insideSpan {
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 64%;
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray300};
  }

  .flexGrid {
    display: flex;
    width: 100%;
  }

  form {
    height: max-content;
    margin-top: 150px;
    margin-left: 17px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 0.6);
    @media (min-width: 769px) {
      height: max-content;
      width: 400px;
      margin-top: 250px;
      margin-left: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
      padding: 20px;
    }
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

  h1 {
    font-style: italic;
    transform: rotate(35deg);
    position: relative;
    top: 7px;
    left: 33px;
    font-weight: 500;
  }

  button {
    height: 50px;
    width: 100%;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 600;
    transition-duration: 0.8s;
    transition-property: ${({ theme }) => theme.colors.tertiary};
    :hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
    @media (min-width: 769px) {
      width: 300px;
      font-size: 18px;
      letter-spacing: 2px;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row-reverse;
    min-height: 100vh;
    background-image: url(${borscht});
    background-size: cover;
    background-position: center;
    background-position-y: 0;
    overflow-y: hidden;
    background-repeat: no-repeat;

    p {
      color: ${({ theme }) => theme.colors.gray0};
    }

    .span {
      height: 90px;
      width: 50%;
      border-radius: 8px;
      position: relative;
      right: 0;
      margin-top: 25px;
    }

    .insideSpan {
      background-color: ${({ theme }) => theme.colors.secondary};
      opacity: 64%;
      height: 100%;
      width: 330px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
    }

    span {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.gray300};
      line-height: 29.05px;
    }

    .flexGrid {
      display: flex;
      width: 50%;
    }

    h1 {
      font-style: italic;
      transform: rotate(35deg);
      position: relative;
      top: 7px;
      left: 33px;
      font-weight: 500;
    }

    button {
      height: 50px;
      width: 300px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.tertiary};
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .back {
      height: 50px;
      width: 300px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.gray300};
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
`;

export const StyledDivButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 7px;
`;

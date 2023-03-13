import styled from 'styled-components';

export const StyledModal = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};

  section {
    background-color: white;
    height: 374px;
    width: 639px;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 25px 0 25px;
    height: 65px;
    background-color: ${({ theme }) => theme.colors.secondary};
    align-items: center;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  }

  header > span {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
  }

  .address {
    margin: 21px 55px 24px 55px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    align-items: center;
  }

  label {
    font-weight: bold;
    margin-right: 190px;
  }

  input {
    height: 60px;
    width: 332px;
    border-radius: 8px;
    background-color: #bfb3a8a3;
    margin-right: 190px;
    font-size: 16px;
    padding-left: 24px;
  }

  input::placeholder {
    font-weight: bold;
    font-size: 16px;
  }

  button {
    height: 50px;
    width: 280px;
    border-radius: 8px;
    background: none;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

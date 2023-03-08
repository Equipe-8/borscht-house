import styled from 'styled-components';

export const StyledRegisterPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('./src/assets/borscht1 OK.png');
  background-size: cover;
  background-position: center;
  overflow-y: hidden;

  .span {
    height: 80px;

    width: 50%;
    border-radius: 8px;
    margin-top: 25px;

    margin-left: 120px;
  }

  .insideSpan {
    background: ${({ theme }) => theme.colors.secondary};
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 16px;
    color: var(--gray300);
  }

  .flexGrid {
    display: flex;
    width: 100%;
  }

  form {
    margin-top: 30px;
    margin-left: 25px;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 20px;
  }
  input {
    height: 50px;
    width: 100%;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.gray600};
    opacity: 64%;
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
    background-color: var(--tertiary);
  }

  @media (min-width: 500px) {
    display: flex;
    flex-direction: row-reverse;
    min-height: 100vh;
    background-image: url('./src/assets/borscht1 OK.png');
    background-size: cover;
    background-position: center;
    overflow-y: hidden;

    .span {
      height: 90px;
      width: 50%;
      border-radius: 8px;
      position: relative;
      right: 0;
      margin-top: 25px;
    }

    .insideSpan {
      background-color: #80041999;
      height: 100%;
      width: 330px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
    }

    span {
      font-size: 20px;
      color: var(--gray300);
      line-height: 29.05px;
    }

    .flexGrid {
      display: flex;
      width: 50%;
    }

    form {
      margin-top: 114px;
      margin-left: 25px;
      width: 73%;
      display: flex;
      flex-direction: column;
      gap: 22px;
      padding: 20px;
    }
    input {
      height: 50px;
      width: 100%;
      border-radius: 8px;
      background-color: #d9ccc1a3;
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
      background-color: var(--tertiary);
    }
  }
`;

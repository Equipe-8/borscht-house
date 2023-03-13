import styled from 'styled-components';
import { AnimationFadeIn } from '../../../../styles/animations';

export const StyledModal = styled.main`
  animation: ${AnimationFadeIn} 0.5s;
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

  img {
    width: 50px;
    height: 50px;
  }

  section {
    background-color: white;
    height: 374px;
    width: 639px;
    border-radius: 5px;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 25px 0 25px;
    height: 65px;
    background-color: ${({ theme }) => theme.colors.secondary};
    align-items: center;
    h2 {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .loading__container {
    width: 100%;
    height: 300px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .loading {
    width: 40px;
    height: 40px;
    border: 5px solid;
    border-color: #0084ff #e6e6e6 #e6e6e6;
    border-radius: 50%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`;

export const StyledCloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  transition: 0.4s;

  :hover {
    opacity: 1;
  }
`;

export const StyledContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 290px;
  overflow: auto;
  ::-webkit-scrollbar {
      display: none;
    }
`;

export const StyledSpanDish = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledSpanCuriosity = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

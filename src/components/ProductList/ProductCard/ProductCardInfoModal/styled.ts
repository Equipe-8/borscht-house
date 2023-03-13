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
    overflow-x: auto;
    border-radius: 5px;
    ::-webkit-scrollbar {
      display: none;
    }
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

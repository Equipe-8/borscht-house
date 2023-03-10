import styled, { css } from 'styled-components';
import BaseTitle from './components/BaseTitle';

interface IStyledTitleProps {
  $fontSize: 'one' | 'two' | 'three' | 'four';
  textAlign?: 'center' | 'left' | 'right';
}

interface IStyledParagraphProps {
  fontColor?: 'gray' | 'red';
  textAlign?: 'center' | 'left' | 'right';
}

export const StyledTitle = styled(BaseTitle)<IStyledTitleProps>`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.6;

  display: flex;
  flex-direction: column;
  gap: 5px;

  text-align: ${({ textAlign }) => textAlign};

  ${({ $fontSize }) => {
    switch ($fontSize) {
      case 'one':
        return css`
          font-size: 1.55rem;
          font-weight: 700;
        `;
      case 'two':
        return css`
          font-size: 1.35rem;
          font-weight: 700;
        `;

      case 'three':
        return css`
          font-size: 1.15rem;
          font-weight: 600;
        `;

      case 'four':
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }}
`;

export const StyledPriceP = styled.span`
  color: #828282;
  font-size: 0.8rem;
`;

export const StyledParagraph = styled.p<IStyledParagraphProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  text-align: ${({ textAlign }) => textAlign};

  ${({ fontColor, theme }) => {
    switch (fontColor) {
      case 'gray':
        return css`
          color: ${theme.colors.gray300};
        `;
      case 'red':
        return css`
          color: ${theme.colors.feedback.negative};
        `;
      default:
        return css`
          color: ${theme.colors.gray100};
        `;
    }
  }}

  strong {
    font-weight: 600;
  }
`;

export const StyledCaption = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 400;
`;

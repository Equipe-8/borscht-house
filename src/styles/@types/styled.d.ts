import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secundary: string;
    };
    colors: {
      tertiary: Interpolation<
        ThemedStyledProps<
          Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
            'ref'
          > & {
            ref?:
              | ((instance: HTMLElement | null) => void)
              | RefObject<HTMLElement>
              | null
              | undefined;
          },
          DefaultTheme
        >
      >;
      primary: string;
      secondary: string;
      tertiary: string;
      gray600: string;
      gray300: string;
      gray150: string;
      gray100: string;
      gray0: string;
      white: string;
      feedback: {
        negative: string;
        warning: string;
        sucess: string;
        information: string;
      };
    };
  }
}

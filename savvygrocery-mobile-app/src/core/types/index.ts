export interface Colors {
  transparent: string;
  white: string;
  black: string;
  lapisBlue: string;
  freeSpeechRed: string;
  dimGray: string;
  navyBlue: string;
}

export interface Theme {
  colors: Colors;
}

export type AppState = {
  loading?: boolean;
};

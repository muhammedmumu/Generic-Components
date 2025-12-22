import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "@mui/styles";
import theme from "../src/stories/theme";
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';

// const defaultTheme = createTheme(); // or your custom theme

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

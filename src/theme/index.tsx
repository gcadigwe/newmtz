import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "300px",
  smd: "560px",
  md: "950px",
  lg: "1100px",
  xl: "1800px",
  //   "2xl": "1536px",
};

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  breakpoints,
});

export default theme;

import logo from "./src/assets/svg/multichainzlogo.svg";
import Footer from "@/components/Footer";
import { useTheme } from "nextra-theme-docs";

export default {
  // primaryHue: 1,
  // darkMode: false,
  // const {setTheme} = useTheme()
  head: () => {
    const { theme, setTheme } = useTheme();

    // console.log(theme);
    if (theme == "dark") {
      setTheme("light");
    }
  },
  logo: <img src={logo.src} />,
  sidebar: {
    titleComponent({ title, type }: any) {
      return <div style={{ fontFamily: "fira-code" }}>{title}</div>;
    },
  },
  nextThemes: {
    defaultTheme: "light",
  },
  darkMode: false,
  footer: {
    component: <Footer />,
  },
};

import { ReactFCWithChildren } from "@/types/react";
import ScrollToTop from "react-scroll-to-top";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Content } from "./styled";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const Layout: ReactFCWithChildren = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
      <ScrollToTop
        smooth
        style={{ borderRadius: "50%" }}
        component={< ArrowUpwardIcon/>}
      />
    </>
  );
};

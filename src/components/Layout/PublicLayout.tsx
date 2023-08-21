import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../Header/Header";
import NavDrawer from "../Header/NavDrawer";
import Footer from "../Footer/footer";

type PublicLayoutProps = { children: ReactNode };

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="">
      <ChakraProvider>
        <Header/>
        <NavDrawer/>
        <div>{children}</div>
        <Footer/>
      </ChakraProvider>
    </div>
  );
};

export default PublicLayout;

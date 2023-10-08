import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type PublicLayoutProps = { children: ReactNode };

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="">
      <SessionProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </SessionProvider>  
    </div>
  );
};

export default PublicLayout;

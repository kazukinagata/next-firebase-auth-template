import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import AuthProvider from "../src/features/auth/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;

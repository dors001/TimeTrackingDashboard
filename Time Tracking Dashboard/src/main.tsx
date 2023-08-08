import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraBaseProvider } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={chakraTheme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);

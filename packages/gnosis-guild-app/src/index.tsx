import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@gnosis.pm/safe-react-components";
import { SnackbarProvider } from "notistack";

import { GuildProvider } from "./context/GuildContext";
import { Web3ContextProvider } from "./context/Web3Context";
import { ContributorProvider } from "./context/ContributorContext";
import GlobalStyle from "./GlobalStyle";
import Routes from "./Routes";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ContributorProvider>
          <Web3ContextProvider>
            <GuildProvider>
              <GlobalStyle />
              <SnackbarProvider>
                <Routes />
              </SnackbarProvider>
            </GuildProvider>
          </Web3ContextProvider>
        </ContributorProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

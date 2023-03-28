import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { FallbackProvider } from "./providers/FallbackProvider";
import { Routes } from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import GlobalStyle from "./styles/global.style";

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <GlobalStyle />
        <NotificationsProvider position='top-right'>
          <BrowserRouter>
            <FallbackProvider>
              <Routes />
            </FallbackProvider>
          </BrowserRouter>
        </NotificationsProvider>
      </MantineProvider>
    </ErrorBoundary>
  );
};

export default App;

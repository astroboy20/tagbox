import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/features/store";
import { OptionProvider } from "@/features/Axios/OptionContext";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ProfileOptionProvider } from "@/features/Axios/ProfileOptionContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import TokenExpirationHandler from "@/container/ProtectedRoute/TokenExpirationHandler";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <TokenExpirationHandler />
        <PersistGate loading={null} persistor={persistor}>
          <ProfileOptionProvider>
            <OptionProvider>
              <ThemeProvider theme={theme}>
                <GlobalStyles />
                <ToastContainer />
                
                  <Component {...pageProps} />
                <Analytics/>
                <SpeedInsights/>
              </ThemeProvider>
            </OptionProvider>
          </ProfileOptionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

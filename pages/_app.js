import "@/styles/globals.css";
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

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);



  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <OptionProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <ToastContainer />
              <Component {...pageProps} />
            </ThemeProvider>
          </OptionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

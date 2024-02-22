import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/features/store";
import { OptionProvider } from "@/features/Axios/OptionContext";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <OptionProvider>
            <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <ToastContainer />
            <Component {...pageProps} />
            </ThemeProvider>
            
          </OptionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

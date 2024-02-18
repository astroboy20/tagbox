import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/features/store";
import { OptionProvider } from "@/features/Axios/OptionContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <OptionProvider>
            <ToastContainer />
            <Component {...pageProps} />
          </OptionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

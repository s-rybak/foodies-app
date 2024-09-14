import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.min.css";
import {ToastContainer} from "react-toastify";

import "./index.css";
import {App} from "components/App";
import {Loader} from "components";
import store, {persistor} from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ToastContainer autoClose={3000}/>
        <Provider store={store}>
            <PersistGate
                loading={<Loader/>}
                persistor={persistor}
            >
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

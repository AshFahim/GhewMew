import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import App from "./App";

import { UserProvider } from "./context/UserContext";

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

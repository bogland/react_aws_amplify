import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Amplify, Auth } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import Login from "./Login";
import LoginCustom from "./LoginCustom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
Amplify.configure(awsconfig);

const App = () => {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<LoginCustom />} />
        </Routes>
      </BrowserRouter>
    </Authenticator.Provider>
  );
};

export default App;

import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Amplify, Auth } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifyContainer,
  Authenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import "@aws-amplify/ui-react/styles.css";

const Login = () => {
  const [authState, setAuthState] = React.useState();
  // const [user, setUser] = React.useState();
  const { user, signOut, route } = useAuthenticator((context) => [
    context.user,
  ]);
  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      // setUser(authData);
    });
  }, []);
  console.log(route);
  console.log(user);
  return (
    <>
      <input placeholder="id" />
      <input placeholder="pw" />
    </>
  );
};

export default Login;

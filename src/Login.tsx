import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Amplify, Auth } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import "@aws-amplify/ui-react/styles.css";

const Login = () => {
  const [authState, setAuthState] = React.useState();
  // const [user, setUser] = React.useState();
  const { user, signOut, route } = useAuthenticator((context) => [
    context.user,
  ]);
  React.useEffect(() => {}, []);
  console.log(route);
  console.log(user);
  return (
    <>
      {route === "authenticated" && user ? (
        <div className="App">
          <header className="App-header">
            <div>Hello, {user.username}</div>
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={signOut}>로그아웃</button>
            {/* <AmplifySignOut /> */}
          </header>
        </div>
      ) : (
        // <button onClick={signIn}></button>
        <Authenticator></Authenticator>
        // <AmplifyContainer>
        // 	<AmplifyAuthenticator />
        // </AmplifyContainer>
      )}
    </>
  );
};

export default Login;

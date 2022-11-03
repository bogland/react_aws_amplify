import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Amplify, Auth } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import "@aws-amplify/ui-react/styles.css";
import AWS from "aws-sdk";

const Login = () => {
  const [authState, setAuthState] = React.useState();
  // const [user, setUser] = React.useState();
  const { user, signOut, route } = useAuthenticator((context) => [
    context.user,
  ]);
  React.useEffect(() => {
    AWS.config.update({ region: "ap-northeast-1" }); //도쿄 리전을 사용함

    // Create publish parameters
    const params = {
      Message: "안녕하세요. 개발이 취미인 사람입니다 :)",
      PhoneNumber: "+8201051214857",
    };

    const publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
      .publish(params)
      .promise();

    publishTextPromise
      .then(function (data) {
        console.log("MessageID is " + data.MessageId);
      })
      .catch(function (err) {
        console.error(err, err.stack);
      });
  }, []);
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

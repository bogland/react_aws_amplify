import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Amplify, Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import "@aws-amplify/ui-react/styles.css";

type SignUpType = {
  username: string;
  password: string;
  phone_number: string;
};
type SignInType = {
  username: string;
  password: string;
};

const LoginCustom = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { register: register2, handleSubmit: handleSubmit2 } =
    useForm<FormData>();
  const { register: register3, handleSubmit: handleSubmit3 } =
    useForm<FormData>();
  const { register: register4, handleSubmit: handleSubmit4 } =
    useForm<FormData>();
  const [username, setUserName] = useState<string>();
  const [authState, setAuthState] = useState();
  const [user, setUser] = React.useState();
  const {
    user: userAuth,
    signOut,
    route,
  } = useAuthenticator((context) => [context.user]);
  useEffect(() => {}, []);
  console.log("route ", route);
  console.log(userAuth);

  const onSignUp = async (data: SignUpType) => {
    console.log("data : ", data);
    const { user } = await Auth.signUp({
      username: data.username,
      password: data.password,
      attributes: {
        phone_number: "+82" + data.phone_number,
      },
      // autoSignIn: {
      //   enabled: true,
      // },
    });
    setUserName(data.username);
    console.log("user : ", user);
  };
  const onSignIn = async (data: SignInType) => {
    console.log("data : ", data);
    try {
      const user = await Auth.signIn(data.username, data.password);
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log("error signing in", error);
    }
  };
  const onVerifyMFASignUp = async (data: { code: string }) => {
    console.log(data);
    const resMFA = await Auth.confirmSignUp(username, data.code);
    console.log(resMFA);
  };
  const onVerifyMFASignIn = async (data: { code: string }) => {
    console.log(data);
    const resMFA = await Auth.confirmSignIn(user, data.code, "SMS_MFA");
    console.log(resMFA);
  };

  const onSignOut = async () => {
    Auth.signOut();
  };

  return (
    <>
      <form onSubmit={handleSubmit((data: any) => onSignUp(data))}>
        <input type="text" placeholder="id" {...register("username" as any)} />
        <input type="text" placeholder="pw" {...register("password" as any)} />
        <input
          type="text"
          placeholder="01012345678"
          {...register("phone_number" as any)}
        />
        <input type="submit" value="submit" />
      </form>
      <form onSubmit={handleSubmit3((data: any) => onVerifyMFASignUp(data))}>
        <input type="text" placeholder="000000" {...register3("code" as any)} />
        <input type="submit" value="auth" />
      </form>
      <form onSubmit={handleSubmit2((data: any) => onSignIn(data))}>
        <input type="text" placeholder="id" {...register2("username" as any)} />
        <input type="text" placeholder="pw" {...register2("password" as any)} />
        <input type="submit" value="submit" />
      </form>
      <form onSubmit={handleSubmit4((data: any) => onVerifyMFASignIn(data))}>
        <input type="text" placeholder="000000" {...register4("code" as any)} />
        <input type="submit" value="auth" />
      </form>
      <button onClick={onSignOut}>로그아웃</button>
    </>
  );
};

export default LoginCustom;

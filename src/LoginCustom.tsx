import React from "react";
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
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [authState, setAuthState] = React.useState();
  // const [user, setUser] = React.useState();
  const { user, signOut, route } = useAuthenticator((context) => [
    context.user,
  ]);
  React.useEffect(() => {}, []);
  console.log(route);
  console.log(user);

  const onSignUp = async (data: SignUpType) => {
    console.log("data : ", data);
    const { user } = await Auth.signUp({
      username: data.username,
      password: data.password,
      attributes: {
        phone_number: "+82" + data.phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log("user : ", user);
  };
  const onSignIn = async (data: SignInType) => {
    console.log("data : ", data);
    try {
      const user = await Auth.signIn(data.username, data.password);
      console.log(user);
    } catch (error) {
      console.log("error signing in", error);
    }
  };
  const onVerifyMFA = async (data: { code: string }) => {
    const resMFA = await Auth.confirmSignIn(user, data.code, "SMS_MFA");
    console.log(resMFA);
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
      <form onSubmit={handleSubmit((data: any) => onSignIn(data))}>
        <input type="text" placeholder="id" {...register("username" as any)} />
        <input type="text" placeholder="pw" {...register("password" as any)} />
        <input type="submit" value="submit" />
      </form>
      <form onSubmit={handleSubmit((data: any) => onVerifyMFA(data))}>
        <input type="text" placeholder="000000" {...register("code" as any)} />
        <input type="submit" value="auth" />
      </form>
    </>
  );
};

export default LoginCustom;

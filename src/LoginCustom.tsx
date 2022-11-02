import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Amplify, Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import "@aws-amplify/ui-react/styles.css";

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

  const onSubmit = (data) => {
    console.log("data : ", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="id" {...register("id" as any)} />
        <input type="text" placeholder="pw" {...register("pw" as any)} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default LoginCustom;

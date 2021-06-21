import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useDispatch } from "react-redux";
import { loginUser } from "../../action/loginAction";

export const LoginForm = () => {
  const { switchToSignup } = useContext(AccountContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="inputEmail"
          placeholder="Email"
          {...register("email", {
            required: "Email Required",
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <div className="text-danger ms-4">Vous devez entrer votre email</div>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <div className="text-danger ms-4">Vous devez entrer un email valide</div>
        )}
        <Input
          type="password"
          placeholder="Mot de passe"
          id="inputPassword"
          {...register("password", {
            required: "Password Required",
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <div className="text-danger ms-4 fs-6">
            Vous devez entrer votre mot de passe
          </div>
        )}
        <SubmitButton type="submit">S'identifier</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Mot de passe oublié?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />

      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
      Vous n'avez pas de compte ?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
        S'inscrire
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

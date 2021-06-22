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
import { SignUp } from "../../action/loginAction";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(SignUp(data));
    console.log(data);
  };
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Prénom"
          id="inputfirstname"
          {...register("firstName", {
            required: "First Name Required",
          })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <div className="text-danger ms-4">Vous devez saisir un prénom</div>
        )}
        <Input
          type="text"
          placeholder="Nom"
          id="inputlastname"
          {...register("lastName", {
            required: "Last Name Required",
          })}
        />
        {errors.lastName && errors.lastName.type === "required" && (
          <div className="text-danger ms-4">Vous devez entrer un nom </div>
        )}
        <Input
          type="date"
          placeholder="Date de nessance"
          id="inputbirthday"
          {...register("birth", {
            required: "Birthday Required",
          })}
        />
        {errors.birth && errors.birth.type === "required" && (
          <div className="text-danger ms-4">
            Vous devez entrer date de naissance
          </div>
        )}
        <Input
          type="email"
          placeholder="Email"
          id="inputEmail"
          {...register("email", {
            required: "Email Required",
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <div className="text-danger ms-4">Vous devez entrer votre email</div>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <div className="text-danger ms-4">
            Vous devez entrer un email valide
          </div>
        )}
        <Input
          type="text"
          placeholder="Tél"
          id="inputPhone"
          {...register("phone", {
            required: "Phone Number Required",
          })}
        />
        {errors.phone && errors.phone.type === "required" && (
          <div className="text-danger ms-4">
            Vous devez entrer un numéro de téléphone
          </div>
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
        <Input
          type="password"
          placeholder="Confirmer mot de passe"
          id="inputConfirmPassword"
          {...register("ConfirmPassword", {
            required: "Password Required",
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <div className="text-danger ms-4 fs-6">
            Vous devez confirmer le mot de passe
          </div>
        )}
        <SubmitButton type="submit">S'inscrire</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      
    </BoxContainer>
  );
}

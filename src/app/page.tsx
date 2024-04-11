"use client";

import { ButtonBase } from "@/app/components/buttons/ButtonBase";
import { createUserSchema } from "@/app/components/helpers/SchecmaValidate";
import { User } from "@/app/models/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { InputBase } from '../app/components/inputs/InputBase';
import { register } from 'module';

export default function Home() {

  const methods = useForm<User>({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confPassword: "",
      age: 0,
    },
    resolver: yupResolver(createUserSchema),
  });

  const onSubmit: SubmitHandler<User> = (data: User) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-cyan-500 to-blue-700 ">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-lg flex flex-col items-center justify-center shadow-md">
        <h1 className="text-4xl text-dark-blue font-bold text-stone-50">
          Registro
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-7 mt-10 mb-7">
                <div className="text-black flex flex-col gap-3">
                  <InputBase
                    name="name"
                    label={"Nombre"}
                    placeholder={"Ingrese su nombre"}
                  />
                  <InputBase
                    name="age"
                    label={"Edad"}
                    placeholder={"Ingrese su edad"}
                    type="number"
                  />
                  <InputBase
                    name="password"
                    label={"Contraseña"}
                    placeholder={"********"}
                    type="password"
                  />
                  
                </div>
                <div className="text-black flex flex-col gap-3">
                <InputBase
                    name="lastName"
                    label={"Apellido"}
                    placeholder={"Ingrese su apellido"}
                  />
                  <InputBase
                    name="email"
                    label={"Correo"}
                    placeholder={"Ingrese su correo"}
                    type="email"
                  />
                  <InputBase
                    name="confPassword"
                    label={"Confirmar contraseña"}
                    placeholder={"********"}
                    type="password"
                  />
                  
                </div>
              </div>
              <ButtonBase
                type="submit"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </main>
  );
}
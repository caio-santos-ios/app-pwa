"use client";

import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { TSignIn } from "@/src/types/auth/signIn.type";
import { loadingAtom } from "@/src/jotai/global/loading.jotai";
import { api } from "@/src/service/api.service";
import { resolveResponse, saveLocalStorage } from "@/src/service/config.service";
import { Logo } from "../logo/Logo";
import { Label } from "@/src/ui/label/Label";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "@/src/ui/button/Button";

export default function SignInForm() {
  const [_, setLoading] = useAtom(loadingAtom);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors }} = useForm<TSignIn>();
  
  const login: SubmitHandler<TSignIn> = async (body: TSignIn) => {
    try {
      setLoading(true);
      const {data} = await api.post(`/auth/login`, body);
      const result = data.result.data;
      
      saveLocalStorage(result, true);
      if(result.admin) {
        router.push("/dashboard");
      } else {
        router.push("/master-data/profile");
      };
    } catch (error) {
      resolveResponse(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex justify-center mb-6">
        <Logo />
      </div>

      <form onSubmit={handleSubmit(login)} className="grid grid-cols-1 gap-4">
        <div className="flex flex-col">
          <Label label="CPF"/>
          <input placeholder="Seu CPF" {...register("cpf")} type="email" className="input-erp-primary input-erp-default"/>
        </div>
        <div>
          <Label label="Senha"/>
          <div className="relative">
            <input placeholder="Sua senha" {...register("password")} type={showPassword ? "text" : "password"} className="input-erp-primary input-erp-default"/>
            <span onClick={() => setShowPassword(!showPassword)} className="absolute z-1 -translate-y-1/2 cursor-pointer right-4 top-1/2">
              {showPassword ? (
                <FaEye className="fill-gray-500 dark:fill-gray-400" />
              ) : (
                <FaEyeSlash className="fill-gray-500 dark:fill-gray-400" />
              )}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/reset-password" className="text-sm text-brand-500 dark:text-(--color-brand-25) hover:text-brand-600 dark:text-brand-400"> Esqueceu sua senha? </Link>
        </div>
        <div>
          <Button type="submit" className="w-full" size="sm">Entrar</Button>
        </div>
      </form>
    </div>
  );
}
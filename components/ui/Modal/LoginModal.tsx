"use client";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import { Button, Heading, Input } from "@/components/components";
import { toast } from "react-hot-toast";
import useRegisterModal from "@src/helpers/hooks/useRegisterModal";
import useLoginModal from "@src/helpers/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onCloseModal = () => {
    reset();
    loginModal.onClose();
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((cb) => {
      setIsLoading(false);

      if (cb?.ok) {
        toast.success("Logged In");
        router.refresh();
        onCloseModal();
      }

      if (cb?.error) {
        toast.error(cb.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back" subtitle="Login your account to continue" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="flex flex-col md:flex-row gap-4">
        <Button
          outline
          label="Continue With Google"
          Icon={FcGoogle}
          onClick={() => {
            signIn("google");
          }}
        />
        <Button
          outline
          label="Continue With Github"
          Icon={AiFillGithub}
          onClick={() => {}}
        />
      </div>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row justify-center items-center gap-2">
          <h1>Don't have an account ?</h1>
          <h1
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={() => {
              onCloseModal();
              registerModal.onOpen();
            }}
          >
            Register
          </h1>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Login"
      onClose={() => {
        onCloseModal();
      }}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;

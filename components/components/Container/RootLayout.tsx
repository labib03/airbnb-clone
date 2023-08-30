"use client";
import { Navbar } from "@components/ui";
import LoginModal from "@components/ui/Modal/LoginModal";
import RegisterModal from "@components/ui/Modal/RegisterModal";
import { ThemeProvider } from "@material-tailwind/react";
import { CurrentUserType } from "@src/types/user";
import React from "react";
import { Toaster } from "react-hot-toast";

type PropType = {
  children: React.ReactNode;
  currentUser: CurrentUserType | null;
};

function RootWrapper(props: PropType) {
  return (
    <ThemeProvider>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Navbar currentUser={props.currentUser} />
      {props.children}
    </ThemeProvider>
  );
}

export default RootWrapper;

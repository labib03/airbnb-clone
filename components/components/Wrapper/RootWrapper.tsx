"use client";
import { Navbar } from "@components/ui";
import { ThemeProvider } from "@material-tailwind/react";
import { CurrentUserType } from "@src/types/user";
import React from "react";
import ModalWrapper from "./ModalWrapper";

type PropType = {
  children: React.ReactNode;
  currentUser: CurrentUserType | null;
};

function RootWrapper(props: PropType) {
  return (
    <ThemeProvider>
      <ModalWrapper />
      <Navbar currentUser={props.currentUser} />
      {props.children}
    </ThemeProvider>
  );
}

export default RootWrapper;

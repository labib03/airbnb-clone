"use client";
import { MenuList, MenuItem, Typography } from "@material-tailwind/react";
import { LoginModalStore } from "@src/helpers/hooks/useLoginModal";
import { RegisterModalStore } from "@src/helpers/hooks/useRegisterModal";
import React, { SetStateAction } from "react";

type PropsType = {
  loginModal: LoginModalStore;
  registerModal: RegisterModalStore;
};

function GeneralMenu(props: PropsType) {
  const { loginModal, registerModal } = props;
  return (
    <MenuList className={"p-1"}>
      <MenuItem
        onClick={() => {
          loginModal.onOpen();
        }}
      >
        <Typography variant="paragraph" className="text-sm font-semibold">
          Login
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          registerModal.onOpen();
        }}
      >
        <Typography variant="paragraph" className="text-sm font-semibold">
          Sign Up
        </Typography>
      </MenuItem>
    </MenuList>
  );
}

export default GeneralMenu;

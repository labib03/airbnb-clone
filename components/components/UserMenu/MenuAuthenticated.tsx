"use client";
import { MenuList, MenuItem, Typography } from "@material-tailwind/react";
import { signOut } from "next-auth/react";
import React from "react";

function MenuAuthenticated() {
  return (
    <MenuList className={"p-1"}>
      <MenuItem
        onClick={() => {
          signOut();
        }}
      >
        <Typography variant="paragraph" className="text-sm font-semibold">
          Log Out
        </Typography>
      </MenuItem>
    </MenuList>
  );
}

export default MenuAuthenticated;

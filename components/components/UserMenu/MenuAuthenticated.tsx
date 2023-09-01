"use client";
import { MenuList, MenuItem, Typography } from "@material-tailwind/react";
import { RentModalStore } from "@src/helpers/hooks/useRentModal";
import { signOut } from "next-auth/react";
import React from "react";

type PropsType = {
  rentModal: RentModalStore;
};

function MenuAuthenticated(props: PropsType) {
  const { rentModal } = props;
  return (
    <MenuList className={"p-1"}>
      <MenuItem onClick={() => {}}>
        <Typography variant="paragraph" className="text-sm font-semibold">
          My Trips
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => {}}>
        <Typography variant="paragraph" className="text-sm font-semibold">
          My Favorites
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => {}}>
        <Typography variant="paragraph" className="text-sm font-semibold">
          My Reservations
        </Typography>
      </MenuItem>
      <MenuItem onClick={rentModal.onOpen}>
        <Typography variant="paragraph" className="text-sm font-semibold">
          Airbnb My Home
        </Typography>
      </MenuItem>
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

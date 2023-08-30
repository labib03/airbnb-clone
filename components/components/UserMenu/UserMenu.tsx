"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import React from "react";
import useRegisterModal from "@src/helpers/hooks/useRegisterModal";
import useLoginModal from "@src/helpers/hooks/useLoginModal";
import { CurrentUserType } from "@src/types/user";
import { Menu, MenuHandler } from "@material-tailwind/react";
import MenuAuthenticated from "./MenuAuthenticated";
import GeneralMenu from "./GeneralMenu";

interface IUserMenuProps {
  currentUser: CurrentUserType | null;
}

const UserMenu: React.FC<IUserMenuProps> = (props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <Menu placement="bottom-end">
          <MenuHandler>
            <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
              <AiOutlineMenu />
              <div className="hidden md:block">
                <Avatar imageSrc={props.currentUser?.image} />
              </div>
            </div>
          </MenuHandler>
          {props.currentUser ? (
            <MenuAuthenticated />
          ) : (
            <GeneralMenu
              loginModal={loginModal}
              registerModal={registerModal}
            />
          )}
        </Menu>
      </div>
    </div>
  );
};

export default UserMenu;

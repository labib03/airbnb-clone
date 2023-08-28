import { Container, Search, UserMenu } from "@/components/components";
import Logo from "./Logo";
import React from "react";
import { CurrentUserType } from "@src/types/user";
import Categories from "@components/components/Categories/Categories";

interface INavbarProps {
  currentUser: CurrentUserType | null;
}

const Navbar: React.FC<INavbarProps> = (props) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={props.currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;

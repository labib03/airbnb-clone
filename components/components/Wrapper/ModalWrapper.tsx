"use client";
import { RegisterModal, LoginModal, RentModal } from "@components/ui";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

function ModalWrapper() {
  return (
    <Fragment>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <RentModal />
    </Fragment>
  );
}

export default ModalWrapper;

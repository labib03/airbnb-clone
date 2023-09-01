"use client";

import { useCallback, useMemo, useState } from "react";
import Modal from "../Modal";
import useRentModal from "@src/helpers/hooks/useRentModal";
import { STEPS } from "@src/helpers/constants/ENUM";
import { useForm } from "react-hook-form";
import { FormRentModal } from "@src/types/modal.type";
import CategorySection from "./Section/CategorySection";
import LocationSection from "./Section/LocationSection";
import InfoSection from "./Section/InfoSection";

const RentModal = () => {
  const [step, setStep] = useState(STEPS.CATEGORY);
  const rentModal = useRentModal();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormRentModal>({
    defaultValues: {
      category: "",
      location: undefined,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");

  const setCustomValue = useCallback((id: keyof FormRentModal, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  }, []);

  const onBack = () => {
    setStep((val) => val - 1);
  };
  const onNext = () => {
    setStep((val) => val + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  const bodyContent = useMemo(() => {
    switch (step) {
      case STEPS.CATEGORY:
        return (
          <CategorySection
            setCustomValue={setCustomValue}
            category={category}
          />
        );

      case STEPS.LOCATION:
        return (
          <LocationSection
            setCustomValue={setCustomValue}
            location={location}
          />
        );

      case STEPS.INFO:
        return (
          <InfoSection
            guestCount={guestCount}
            roomCount={roomCount}
            bathroomCount={bathroomCount}
            setCustomValue={setCustomValue}
          />
        );

      default:
        return;
    }
  }, [category, location, guestCount, roomCount, bathroomCount, step]);

  return (
    <Modal
      title="Airbnb Your Home"
      isOpen={rentModal.isOpen}
      onClose={() => {
        rentModal.onClose();
      }}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
      // footer={footerContent}
    />
  );
};

export default RentModal;

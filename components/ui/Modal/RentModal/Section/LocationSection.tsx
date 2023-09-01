"use client";
import { CountrySelect, Heading, Map } from "@components/components";
import { CountrySelectValue } from "@src/types/input.type";
import { FormRentModal } from "@src/types/modal.type";

type PropsType = {
  setCustomValue: (id: keyof FormRentModal, value: any) => void;
  location: CountrySelectValue | undefined;
};

function LocationSection(props: PropsType) {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where is your place located?"
        subtitle="Help guests find you!"
      />
      <CountrySelect
        onChange={(value) => props.setCustomValue("location", value)}
        value={props.location}
      />
      <Map center={props.location?.latlng} />
    </div>
  );
}

export default LocationSection;

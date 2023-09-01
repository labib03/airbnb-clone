import { Counter, Heading } from "@components/components";
import { FormRentModal } from "@src/types/modal.type";

interface PropsType {
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  setCustomValue: (id: keyof FormRentModal, value: any) => void;
}

function InfoSection(props: PropsType) {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Share some basics about your place"
        subtitle="What amenities do you have?"
      />
      <Counter
        title="Guest"
        subtitle="How many guest do you allow"
        value={props.guestCount}
        onChange={(value) => props.setCustomValue("guestCount", value)}
      />
      <Counter
        title="Rooms"
        subtitle="How many rooms do you have?"
        value={props.roomCount}
        onChange={(value) => props.setCustomValue("roomCount", value)}
      />
      <Counter
        title="Bathrooms"
        subtitle="How many bathrooms do you have?"
        value={props.bathroomCount}
        onChange={(value) => props.setCustomValue("bathroomCount", value)}
      />
    </div>
  );
}

export default InfoSection;

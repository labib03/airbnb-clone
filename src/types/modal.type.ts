import { CountrySelectValue } from "./input.type";

export interface FormRentModal {
  category: string;
  location: undefined | CountrySelectValue;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  imageSrc: string;
  price: number;
  title: string;
  description: string;
}

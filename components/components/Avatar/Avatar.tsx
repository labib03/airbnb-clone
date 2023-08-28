import Image from "next/image";

type PropsType = {
  imageSrc: string | undefined | null;
};

const Avatar = (props: PropsType) => {
  return (
    <Image
      src={props.imageSrc || "/images/placeholder.jpg"}
      alt="avatar"
      height={30}
      width={30}
      className="rounded-full"
    />
  );
};

export default Avatar;

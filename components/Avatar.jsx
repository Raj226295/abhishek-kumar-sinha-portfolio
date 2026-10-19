import Image from "next/image";
import { assetUrl } from "../lib/assetUrl";

const Avatar = () => {
  return (
    <div className="flex h-full w-full select-none pointer-events-none xl:max-w-none">
      <Image
        src={assetUrl("/raj-avatar-v2.png")}
        alt="Raj Vardhan Singh"
        width={1155}
        height={1362}
        className="translate-z-0 h-full w-full object-contain object-center xl:object-right-bottom"
        priority
      />
    </div>
  );
};

export default Avatar;

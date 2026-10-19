import Image from "next/image";
import { assetUrl } from "../lib/assetUrl";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none w-full h-full pointer-events-none select-none">
      <Image
        src={assetUrl("/raj-avatar-v2.png")}
        alt="Raj Vardhan Singh"
        width={1155}
        height={1362}
        className="translate-z-0 w-full h-full object-contain object-right-bottom"
        priority
      />
    </div>
  );
};

export default Avatar;

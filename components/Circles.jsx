import Image from "next/image";
import { assetUrl } from "../lib/assetUrl";

const Circles = () => {
  return (
    <div className="pointer-events-none absolute -right-16 -bottom-2 z-10 w-[200px] select-none mix-blend-color-dodge animate-pulse duration-75 xl:w-[300px]" aria-hidden="true">
      <Image
        src={assetUrl("/circles.png")}
        alt=""
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;

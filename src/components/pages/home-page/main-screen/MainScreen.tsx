// styles
import { cn } from "@/app/utils/cn";

// hooks
import Image from "next/image";

interface MainScreenProps {
  houseImageSrc: string;
  houseImageAlt: string;
  architectureImageSrc: string;
  architectureImageAlt: string;
  description: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const MainScreen = ({
  houseImageSrc,
  houseImageAlt,
  architectureImageSrc,
  architectureImageAlt,
  description,
}: MainScreenProps) => {
  return (
    <section id="main-screen" className="relative overflow-x-hidden">
      <div
        className={cn(
          "absolute left-1/2 top-[10%] -z-[1] h-auto w-[90%] max-w-screen-3xl -translate-x-1/2 px-5",
          "lg:w-screen lg:px-10",
          "xl:px-[60]",
        )}
      >
        <Image
          width={1800}
          height={170}
          className={cn("h-full w-full")}
          quality={100}
          src={`${BASE_URL}${houseImageSrc}`}
          alt={architectureImageAlt || "architecture"}
        />
      </div>
      <div
        className={cn(
          "flex w-full flex-col items-center gap-5 pr-5 pt-32",
          "sm:gap-100 sm:mb-14 sm:grid sm:grid-cols-2",
          "lg:pr-10 lg:pt-48",
          "xl:pr-[60px]",
        )}
      >
        <Image
          width={1058}
          height={824}
          src={`${BASE_URL}${architectureImageSrc}`}
          quality={100}
          alt={houseImageAlt || ""}
          className={cn("min-w-[308px]", "sm:min-w-[380px]")}
        />
        <div className={cn("mb-14 px-5 text-white", "sm:text-black")}>
          <p className={cn("text-text mb-7 max-w-[580px]")}>{description}</p>
          <button
            className={cn(
              "rounded-full border border-white px-12 py-5 transition-colors duration-300 hover:border-hover hover:bg-hover hover:text-white active:border-active active:bg-active",
              "sm:border-black",
            )}
          >
            All projects
          </button>
        </div>
      </div>
      <div
        className={cn(
          "absolute bottom-0 left-0 -z-10 h-80 w-screen bg-black",
          "block sm:h-20",
        )}
      ></div>
    </section>
  );
};

export default MainScreen;

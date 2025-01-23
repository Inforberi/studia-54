// styles
import { cn } from "@/app/utils/cn";

// hooks
import Image from "next/image";

const FirstBlockCurrent = () => {
  return (
    <div className={cn("grid grid-cols-[1fr,_auto] gap-28")}>
      <div className="relative aspect-[4/3] w-[54vw] max-w-[1037px]">
        <Image src="/main-screen/testnews.jpg" fill alt="что-то" />
      </div>
      <div className="flex flex-col gap-7 border-b-[1px] border-divider text-white">
        <h2 className="text-[32px]">Project description</h2>
        <p className="mb-10">
          This involves considering local traditions, historical influences, and
          social norms. For example, the use of specific materials, colors, and
          architectural styles can reflect the cultural heritage of a region.
          Moreover, culturally sensitive design can foster a sense of community
          and belonging among occupants.
        </p>
        <p>
          At the heart of Studia 54s philosophy lies a profound respect for the
          owners desires. We strive to blend their unique preferences with our
          distinctive design code. This approach allows us to achieve harmony
          and perfection in every project, transforming houses into personalized
          spaces that fully reflect the dreams and lifestyle of their owners.
        </p>
      </div>
    </div>
  );
};

export default FirstBlockCurrent;

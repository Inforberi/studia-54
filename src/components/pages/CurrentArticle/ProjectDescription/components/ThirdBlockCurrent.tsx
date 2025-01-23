// hooks
import Image from "next/image";

const ThirdBlockCurrent = () => {
  return (
    <div className="relative aspect-[3/2] p-12 text-white">
      <Image src={"/main-screen/testnews.jpg"} alt="" fill />
      <div className="absolute bottom-[50px] left-[50px] max-w-xl">
        <h3 className="mb-7 text-[32px]">Layout features</h3>
        <p>
          Studia 54 architects designed a comprehensive architectural ensemble
          that includes a main house, a garage, four townhouses, and a separate
          staff house. All buildings are executed in a unified stylistic design,
          appearing as a cohesive complex.
        </p>
      </div>
    </div>
  );
};

export default ThirdBlockCurrent;

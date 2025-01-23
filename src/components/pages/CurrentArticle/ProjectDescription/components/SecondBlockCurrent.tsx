// hooks
import Image from "next/image";

const SecondBlockCurrent = () => {
  return (
    <div className="grid grid-cols-[auto,_auto] gap-28 text-white">
      <div className="max-w-[650px] border-b-[1px] border-divider">
        <div className="relative mb-10 aspect-[4/3]">
          <Image
            src="/main-screen/testnews.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <p className="text-text mb-10">
          The architectural project of a 1,093 m² development in the Knyazhe
          Ozero cottage community in the Moscow region was an ambitious task for
          the Studia 54 team. The owner wished to create a complex of houses in
          a unified style with convenient logistics for moving between
          buildings. The elongated shape with a sharp angle of the plot posed a
          unique challenge during the design phase, requiring a special approach
          from the architects to harmoniously place all the structures.
        </p>
      </div>
      <div className="max-w-[1038px]">
        <div className="relative mb-10 aspect-[4/3]">
          <Image
            src="/main-screen/testnews.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <p className="text-text">
          The architectural project of a 1,093 m² development in the Knyazhe
          Ozero cottage community in the Moscow region was an ambitious task for
          the Studia 54 team. The owner wished to create a complex of houses in
          a unified style with convenient logistics for moving between
          buildings. The elongated shape with a sharp angle of the plot posed a
          unique challenge during the design phase, requiring a special approach
          from the architects to harmoniously place all the structures.
        </p>
      </div>
    </div>
  );
};

export default SecondBlockCurrent;

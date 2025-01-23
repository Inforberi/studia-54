// components

import PreviewArticle from "@/components/shared/PreviewArticle/PreviewArticle";

const Recommend = () => {
  const arr = new Array(5).fill(0);
  return (
    <section className="px-[60px] py-32 text-white">
      <h2 className="mb-12 text-[32px] font-semibold">We also recommend</h2>
      <div className="overflow-hidden">
        <div className="flex snap-x snap-mandatory gap-[30px] overflow-x-auto">
          {arr.map((article, index) => (
            <div key={index} className="min-w-0 flex-[0_0_580px] snap-start">
              <PreviewArticle
                documentID="/"
                src={"/main-screen/testnews.jpg"}
                title="The Importance of Sustainable Design in Architectural Projects"
                text="In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency."
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommend;

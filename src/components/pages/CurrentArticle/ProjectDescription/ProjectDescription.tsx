// components
import FirstBlock from "./components/FirstBlockCurrent";
import SecondBlockCurrent from "./components/SecondBlockCurrent";
import ThirdBlockCurrent from "./components/ThirdBlockCurrent";

const ProjectDescription = () => {
  return (
    <div className="grid gap-44 border-y-[1px] border-divider px-[60px] py-32">
      <FirstBlock />
      <SecondBlockCurrent />
      <ThirdBlockCurrent />
    </div>
  );
};

export default ProjectDescription;

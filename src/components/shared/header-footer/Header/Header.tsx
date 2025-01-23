// styles
import { cn } from "@/app/utils/cn";

// components
import SharedHeaderFooter from "../SharedHeaderFooter";

const Header = () => {
  return (
    <header className={cn("py-5", "sm:py-6")}>
      <SharedHeaderFooter as="header" />
    </header>
  );
};

export default Header;

// styles
import { cn } from "@/app/utils/cn";

// components
import SharedHeaderFooter from "../SharedHeaderFooter";

const Footer = () => {
  return (
    <footer id="footer" className={cn("border-t border-divider bg-black py-9")}>
      <SharedHeaderFooter as="footer" />
    </footer>
  );
};

export default Footer;

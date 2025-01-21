import { navItems } from "@/data/nav";
import { FloatingNav } from "./ui/FloatingNavbar";

export const Nav = () => {
  return <FloatingNav navItems={navItems} />;
};

import React from "react";
import SectionWrapper from "../SectionWrapper";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/create-blog",
    name: "Create your Blog",
  },
];
function Navbar() {
  return (
    <div className="bg-brand-primary">
      <SectionWrapper className={"flex items-center justify-between"}>
        <Logo />
        <div className="flex gap-5">
          {navLinks.map((navData, index) => (
            <Link  key={index} className="text-lg text-brand-light hover:text-brand-muted hover:underline" to={navData.path}>
              {navData.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Navbar;

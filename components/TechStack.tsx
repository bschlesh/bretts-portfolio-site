import { HoverEffect } from "./ui/CardHover";
import { stack } from "../data/stack";
import { ColourfulText } from "./ui/ColorText";

export const TechStack = () => {
  return (
    <>
      <div
        id="tech-stack"
        className="flex items-start justify-center w-full flex-col px-8"
      >
        <h2 className="ml-2 text-xl md:text-3xl lg:text-5xl font-bold text-left dark:text-white text-black relative z-2 font-sans">
          Here are some of the <ColourfulText text="technologies" /> I&apos;ve
          been working with recently:
        </h2>
        <HoverEffect items={stack} />
      </div>
    </>
  );
};

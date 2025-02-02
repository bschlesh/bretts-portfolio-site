import { HoverEffect } from "./ui/CardHover";
import { stack } from "../data/stack";

export const TechStack = () => {
  return (
    <>
      <div
        id="tech-stack"
        className="flex items-start justify-center w-full flex-col px-8"
      >
        <h2 className="text-5xl font-bold text-center dark:text-white text-black relative z-2 font-sans">
          These are some of the technologies I work with.
        </h2>
        <HoverEffect items={stack} />
      </div>
    </>
  );
};

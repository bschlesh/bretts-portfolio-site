import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Background } from "./ui/Background";

export const Hero = () => {
  return (
    <Background className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        My name is Brett. <br />
        I&apos;m a full stack developer based in NYC.
      </h2>
      <h4 className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        I hope you&apos;ll stick around and check out some of my work. You can
        also find me on LinkedIn or GitHub.
      </h4>
      <div className="flex flex-row items-center justify-center mt-2 gap-x-3">
        <a
          href="https://www.linkedin.com/in/brett-schlesinger/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[3px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg" />
          <div className="px-4 py-1 flex flex-row gap-2 md:px-4 md:py-2 bg-black rounded-[6px] relative group transition duration-200 text-white text-sm hover:bg-transparent">
            <IconBrandLinkedin size={18} />
          </div>
        </a>
        <a
          href="https://github.com/bschlesh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[3px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg" />
          <div className="px-4 py-1 flex flex-row gap-2 md:px-4 md:py-2 bg-black rounded-[6px] relative group transition duration-200 text-white text-sm hover:bg-transparent">
            <IconBrandGithub size={18} />
          </div>
        </a>
      </div>
    </Background>
  );
};

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Cover } from "./ui/Cover";

export const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-7xl font-sans py-2 relative z-20 font-bold tracking-tight">
        Hi, I&apos;m Brett <br />
      </h2>
      <h4 className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        <Cover>
          I hope you&apos;ll stick around and learn more about me. You can also
          find me on LinkedIn or GitHub.
        </Cover>
      </h4>
      <div className="flex flex-row items-center justify-center mt-2 gap-x-3">
        <a
          href="https://www.linkedin.com/in/brett-schlesinger/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[3px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg" />
          <div className="px-4 py-1 flex flex-row gap-2 md:px-4 md:py-2 bg-gray-800 rounded-[6px] relative group transition duration-200 text-white text-sm hover:bg-transparent">
            <IconBrandLinkedin size={18} />
          </div>
        </a>
        <a
          href="https://github.com/bschlesh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[3px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg" />
          <div className="px-4 py-1 flex flex-row gap-2 md:px-4 md:py-2 bg-gray-800 rounded-[6px] relative group transition duration-200 text-white text-sm hover:bg-transparent">
            <IconBrandGithub size={18} />
          </div>
        </a>
      </div>
    </div>
  );
};

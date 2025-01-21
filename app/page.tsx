"use client";

import { Hero } from "@/components/Hero";
import { Hobby } from "@/components/Hobby";
import { Nav } from "@/components/Nav";
import { TechStack } from "@/components/TechStack";
import { ColourfulText } from "@/components/ui/ColorText";
import { WorkTimeline } from "@/components/WorkTimeline";
import { hobbies } from "@/data/hobbies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Nav />
      <WorkTimeline />
      <TechStack />
      <h2 className="mx-8 text-xl md:text-3xl lg:text-5xl font-bold text-left dark:text-white text-black relative z-2 font-sans">
        Here&apos;s what I like to do in my <ColourfulText text="free time" />:
      </h2>
      <div
        className="flex flex-col sm:flex-row gap-x-2 px-8 items-center justify-center"
        id="hobbies"
      >
        {hobbies.map((hobby, index) => (
          <div key={index} className="w-full sm:w-1/3">
            <Hobby
              title={hobby.title}
              description={hobby.description}
              imageUrl={hobby.imageUrl}
              imageAlt={hobby.imageAlt}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

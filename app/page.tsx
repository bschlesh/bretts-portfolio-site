"use client";

import { Hero } from "@/components/Hero";
import { Hobby } from "@/components/Hobby";
import { Nav } from "@/components/Nav";
import { TechStack } from "@/components/TechStack";
import { WorkTimeline } from "@/components/WorkTimeline";
import { hobbies } from "@/data/hobbies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Nav />
      <WorkTimeline />
      <TechStack />
      <div id="hobbies">
        <div className="flex items-start justify-center w-full flex-col px-8">
          <h2 className="text-5xl font-bold text-center dark:text-white text-black relative z-2 font-sans">
            This is what I like to do in my free time.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-2 px-8 items-center justify-center">
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
      </div>
    </main>
  );
}

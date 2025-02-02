"use client";

import { Hero } from "@/components/Hero";
import { Hobbies } from "@/components/Hobby";
import { Nav } from "@/components/Nav";
import { TechStack } from "@/components/TechStack";
import { WorkTimeline } from "@/components/WorkTimeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <Nav />
      <WorkTimeline />
      <TechStack />
      <Hobbies />
    </main>
  );
}

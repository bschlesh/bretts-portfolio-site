"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hobbies } from "@/data/hobbies";

export interface HobbyProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function Hobby({ title, description, imageUrl, imageAlt }: HobbyProps) {
  return (
    <div className="relative">
      <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-3 sm:my-10">
        <div className="relative z-10">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={800}
            height={800}
            className="h-[300px] w-[400px] object-cover rounded-lg"
          />

          <motion.div className="py-4 relative z-20">
            <h2 className="text-white text-lg sm:text-xl text-left font-bold">
              {title}
            </h2>
            <p className="text-neutral-200 text-sm sm:text-xl text-left mt-4">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Hobbies() {
  return (
    <div id="hobbies">
      <div className="pb-10 px-12">
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
  );
}

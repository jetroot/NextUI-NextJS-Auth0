"use client";

import RocketCard from "@/components/RocketCard";
import SkeletonCard from "@/components/SkeletonCard";
import { useLaunches } from "@/services/queries";
import { GiFalconMoon } from "react-icons/gi";
import { motion } from "framer-motion";

const Home = () => {
  const { data, isLoading } = useLaunches();

  if (isLoading)
    return (
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );

  return (
    <>
      {!data && (
        <div
          className={`absolute inset-0 flex h-full w-full items-center justify-center gap-2 overflow-hidden`}
        >
          <motion.div
            animate={{
              scale: 1,
              rotate: [0, 360],
              transition: {
                duration: 3,
              },
              opacity: [0, 0.5, 1],
            }}
            className="flex cursor-default items-center justify-center gap-2"
          >
            <GiFalconMoon className="rounded-xl bg-gradient-to-tr from-green-300 to-indigo-400 text-9xl" />

            <h1 className="bg-gradient-to-r from-green-400 to-indigo-400 bg-clip-text text-9xl font-bold uppercase text-transparent">
              ACME
            </h1>
          </motion.div>
        </div>
      )}
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((rocket: any) => (
          <RocketCard key={rocket.flight_number} rocket={rocket} />
        ))}
      </div>
    </>
  );
};

export default Home;

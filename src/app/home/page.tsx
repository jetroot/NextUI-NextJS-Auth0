"use client";

import RocketCard from "@/components/RocketCard";
import SkeletonCard from "@/components/SkeletonCard";
import { useLaunches } from "@/services/queries";
import toast from "react-hot-toast";

const Home = () => {
  const { data, error, isLoading } = useLaunches();

  if (isLoading)
    return (
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );

  if (error) {
    toast.error(error.message);
    return;
  }

  return (
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((rocket: any) => (
        <RocketCard key={rocket.flight_number} rocket={rocket} />
      ))}
    </div>
  );
};

export default Home;

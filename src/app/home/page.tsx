"use client";

import BirdsCards from "@/components/BirdsCards";
import SkeletonCard from "@/components/SkeletonCard";
import { fetcher } from "@/fetching/fetcher";
import useSWR from "swr";

const Home = () => {
  const { data, error, isLoading } = useSWR("/products", fetcher);
  // console.log("data", data.photos);

  if (isLoading)
    return (
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((bird: any) => <BirdsCards key={bird.id} bird={bird} />)}
    </div>
  );
};

export default Home;

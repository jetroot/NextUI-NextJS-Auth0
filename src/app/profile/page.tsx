"use client";

import { Avatar } from "@nextui-org/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AiOutlineLoading } from "react-icons/ai";

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading)
    return (
      <div>
        <AiOutlineLoading className="animate-spin" />
      </div>
    );
  if (error) return <div>{error?.message}</div>;

  return (
    user && (
      <div className="flex items-center gap-2">
        <Avatar size="sm" src={user.picture ?? undefined} />
        <p className="text-md w-14 truncate text-black dark:text-white">
          {user.name}
        </p>
      </div>
    )
  );
};

export default Profile;

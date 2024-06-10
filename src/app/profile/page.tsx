import { Avatar } from "@nextui-org/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AiOutlineLoading } from "react-icons/ai";
import { forwardRef } from "react";

const Profile = forwardRef<HTMLButtonElement | null>(
  function Profile(props, ref) {
    const { user, error, isLoading } = useUser();

    if (isLoading)
      return (
        <div>
          <AiOutlineLoading className="animate-spin" />
        </div>
      );

    if (error) return <div className="text-white">{error?.message}</div>;

    return (
      <Avatar
        isBordered
        as="button"
        className="transition-transform"
        color="secondary"
        name={user?.name ?? undefined}
        size="sm"
        src={user?.picture ?? undefined}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Profile;

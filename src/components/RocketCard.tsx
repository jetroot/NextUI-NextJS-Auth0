import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import toast from "react-hot-toast";

const RocketCard = ({ rocket }: any) => {
  const getRocketDetails = () => {
    toast(rocket.details, {
      icon: <Image src={rocket.links.mission_patch} alt="Rocket Icon" />,
    });
  };

  return (
    <Card isFooterBlurred className="h-[300px] w-full">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="text-tiny font-bold uppercase text-white/60">
          {/* Your day your way */}
          {/* {rocket.title} */}
        </p>
        <h4 className="text-xl font-medium text-white/90">
          {/* Your checklist for better sleep */}
          {/* {rocket.details} */}
          {/* {rocket.habitat} */}
          {/* {rocket.title} */}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 h-full w-full object-cover"
        src={rocket.links.mission_patch}
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
        <div className="flex flex-grow items-center gap-2">
          <Image
            alt="Breathing app icon"
            className="h-11 w-10 rounded-full bg-black"
            src={rocket.links.mission_patch_small}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">
              {rocket.rocket.rocket_name}
            </p>
            <p className="text-tiny text-white/60">{rocket.mission_name}</p>
          </div>
        </div>
        <Button radius="full" size="sm" onClick={getRocketDetails}>
          {rocket.rocket.rocket_type}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RocketCard;

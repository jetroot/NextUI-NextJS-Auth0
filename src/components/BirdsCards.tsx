import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

const BirdsCards = ({ bird }: any) => {
  return (
    <Card isFooterBlurred className="h-[300px] w-full">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="text-tiny font-bold uppercase text-white/60">
          {/* Your day your way */}
          {bird.title}
        </p>
        <h4 className="text-xl font-medium text-white/90">
          Your checklist for better sleep
          {/* {bird.habitat} */}
          {/* {bird.title} */}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 h-full w-full object-cover"
        src={bird.images[0]}
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
        <div className="flex flex-grow items-center gap-2">
          <Image
            alt="Breathing app icon"
            className="h-11 w-10 rounded-full bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good nights sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">
          Get App
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BirdsCards;

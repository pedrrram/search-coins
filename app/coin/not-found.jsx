import Image from "next/image";
import Box from "../../components/Box";

const NotFound = () => {
  return (
    <Box title="Not Found">
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src="/NotFound.svg"
          alt="Not Found"
          width={104}
          height={104}
          priority
        />
        <p className="leading-8 font-medium">Symbol not found!</p>
      </div>
    </Box>
  );
};

export default NotFound;

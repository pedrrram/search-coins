import Image from "next/image";
import { notFound } from "next/navigation";
import Box from "./../../../components/Box";
import { getCoin } from "./../../../services/coin.services";

const CoinDetails = async ({ params }) => {
  const symbol = (await params).symbol;
  const coin = await getCoin(symbol);

  if (!coin) {
    return notFound();
  }

  return (
    <Box title={coin.name}>
      <div className="flex justify-center">
        <Image
          src={coin?.image?.large}
          alt={coin.name}
          width={104}
          height={104}
        />
      </div>
      <div className="space-y-4 leading-8">
        <div className="flex justify-between items-center">
          <span>Name</span>
          <span className="font-medium">{coin.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Symbol</span>
          <span className="font-medium">{coin.symbol}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Price</span>
          <span className="font-medium">
            {coin.market_data.current_price.usd.toLocaleString("en-US")}$
          </span>
        </div>
        <div className="space-y-3">
          <span>Description</span>
          <p className="font-medium line-clamp-3">{coin.description?.en}</p>
        </div>
      </div>
    </Box>
  );
};

export default CoinDetails;

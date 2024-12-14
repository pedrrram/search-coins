export const getCoin = async (symbol) => {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${symbol}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (res.ok) {
      const coin = await res.json();
      return coin;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

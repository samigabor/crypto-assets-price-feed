const generateRandomAssetData = (name, symbol) => {
  return {
    name,
    symbol,
    price: Math.floor(Math.random() * 10000),
    volume: Math.floor(Math.random() * 1000000),
    id: Math.round(Math.random() * 1000000),
  };
};

module.exports = { generateRandomAssetData };

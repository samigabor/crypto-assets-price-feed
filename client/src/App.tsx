import { useEffect, useState } from "react";
import "./App.css";
import AddAsset from "./components/AddAsset";
import AssetsFilter from "./components/AssetsFilter";
import AssetsList from "./components/AssetsList";
import api from "./shared/api";
import Asset from "./shared/interfaces";
import { sortItems } from "./shared/utils";

const App = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("name");

  const addAsset = async (asset: Asset): Promise<void> => {
    const response: Asset = await api.addAsset(asset);
    setAssets([...assets, response]);
  };

  const getAssets = async (column: string): Promise<void> => {
    const response: Asset[] = await api.getAssets();
    const sorted: Asset[] = sortItems(response, column);
    setAssets(sorted);
  };

  const filteredAssets = (): Asset[] => {
    return assets.filter((asset: Asset) => {
      const lowercaseKeyword = searchString.toLowerCase();
      const lowercaseName = asset.name.toLowerCase();
      const lowercaseSymbol = asset.symbol.toLowerCase();
      return (
        lowercaseName.includes(lowercaseKeyword) ||
        lowercaseSymbol.includes(lowercaseKeyword)
      );
    });
  };

  const onSortAssets = (column: string): void => {
    const sorted: Asset[] = sortItems(assets, column);
    setSortColumn(column);
    setAssets(sorted);
  };

  useEffect(() => {
    getAssets(sortColumn);
  }, [sortColumn]);

  useEffect(() => {
    // basic pooling mechanism
    const intervalId = setInterval(() => {
      getAssets(sortColumn);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [sortColumn]);

  return (
    <div className="App">
      <h1>Price feed for cypto assets</h1>
      <AssetsFilter
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <AddAsset addAsset={addAsset} />
      <AssetsList
        assets={filteredAssets()}
        onSortAssets={onSortAssets}
        sortColumn={sortColumn}
      />
    </div>
  );
};

export default App;

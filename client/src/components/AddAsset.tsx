import { FC, FormEvent, useState } from "react";
import Asset from "../shared/interfaces";
import "./AddAsset.css";

interface AddAssetProps {
  addAsset: (asset: Asset) => void;
}

const AddAsset: FC<AddAssetProps> = ({ addAsset }: AddAssetProps) => {
  const [name, setName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !symbol) {
      alert("Name and symbol are required!");
      return;
    }
    addAsset({ name, symbol });
    setName("");
    setSymbol("");
  };

  return (
    <form className="asset-form" onSubmit={handleSubmit}>
      <div className="asset-container">
        <div className="input-container">
          <input
            className="input-name"
            type="text"
            id="assetName"
            value={name}
            placeholder="Add asset name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-symbol"
            type="text"
            id="assetSymbol"
            value={symbol}
            placeholder="Add asset symbol"
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <input className="add-button" type="submit" value="Add Asset" />
      </div>
    </form>
  );
};

export default AddAsset;

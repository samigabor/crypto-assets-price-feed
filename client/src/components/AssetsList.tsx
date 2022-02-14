import { FC } from "react";
import downArrow from "../assets/down-arrow.svg";
import Asset from "../shared/interfaces";
import "./AssetsList.css";

interface AssetsListProps {
  assets: Asset[];
  sortColumn: string;
  onSortAssets: (column: string) => void;
}

const AssetsList: FC<AssetsListProps> = ({
  assets = [],
  sortColumn,
  onSortAssets,
}: AssetsListProps) => {
  return (
    <div className="list-container">
      <table className="table-container">
        <thead>
          <tr className="header-row">
            <th className="header-item" onClick={() => onSortAssets("name")}>
              Name
              {sortColumn === "name" && (
                <img alt="down arrow" src={downArrow} className="down-arrow" />
              )}
            </th>
            <th className="header-item" onClick={() => onSortAssets("symbol")}>
              Symbol
              {sortColumn === "symbol" && (
                <img alt="down arrow" src={downArrow} className="down-arrow" />
              )}
            </th>
            <th className="header-item" onClick={() => onSortAssets("price")}>
              Price
              {sortColumn === "price" && (
                <img alt="down arrow" src={downArrow} className="down-arrow" />
              )}
            </th>
            <th className="header-item" onClick={() => onSortAssets("volume")}>
              Volume
              {sortColumn === "volume" && (
                <img alt="down arrow" src={downArrow} className="down-arrow" />
              )}
            </th>
          </tr>
        </thead>

        {assets.length ? (
          assets.map((asset: Asset) => (
            <tbody key={asset.id}>
              <tr className="body-row">
                <td className="item-column">{asset.name}</td>
                <td className="item-column">{asset.symbol}</td>
                <td className="item-column">{asset.price}</td>
                <td className="item-column">{asset.volume}</td>
              </tr>
            </tbody>
          ))
        ) : (
          <></>
        )}
      </table>

      {!assets.length && <h3 className="no-items">Assets list is empty</h3>}
    </div>
  );
};

export default AssetsList;

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
            <th onClick={() => onSortAssets("name")}>
              Name
              {sortColumn === "name" && (
                <img alt="down arrow" src={downArrow} className="down-arrow" />
              )}
            </th>
            <th onClick={() => onSortAssets("symbol")}>
              Symbol
              {sortColumn === "symbol" && (
                <img alt="down arrow" src={downArrow} className="down-arrow" />
              )}
            </th>
            <th onClick={() => onSortAssets("price")}>
              Price
              {sortColumn === "price" && (
                <img alt="down arrow" src={downArrow} className="down-arrow" />
              )}
            </th>
            <th onClick={() => onSortAssets("volume")}>
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
                <td>{asset.name}</td>
                <td>{asset.symbol}</td>
                <td>{asset.price}</td>
                <td>{asset.volume}</td>
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

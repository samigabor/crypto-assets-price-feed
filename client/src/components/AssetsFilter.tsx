import { FC } from "react";
import "./AssetsFilter.css";

interface AssetsFilterProps {
  searchString: string;
  setSearchString: (value: string) => void;
}

const AssetsFilter: FC<AssetsFilterProps> = ({
  searchString,
  setSearchString,
}: AssetsFilterProps) => {
  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        <input
          className="filter-name"
          type="text"
          name="filter-input"
          id="filterInput"
          value={searchString}
          placeholder="Filter by name or symbol"
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input
          className="filter-button"
          type="submit"
          value="Reset Filter"
          onClick={(e) => setSearchString("")}
        />
      </div>
    </div>
  );
};

export default AssetsFilter;

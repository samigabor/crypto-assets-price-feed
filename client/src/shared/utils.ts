const sortItems = (items: any[], column: string): any[] => {
  let sorted: any[];
  switch (column) {
    case "name":
      sorted = sortByName(items, column);
      break;
    case "symbol":
      sorted = sortByName(items, column);
      break;
    case "price":
      sorted = sortByValue(items, column, false);
      break;
    case "volume":
      sorted = sortByValue(items, column, false);
      break;
    default:
      sorted = items;
      break;
  }
  return sorted;
};

const sortByName = (items: any[], value: string, ascending = true): any[] => {
  return items.sort((a: any, b: any) => {
    const nameA = a[value].toUpperCase();
    const nameB = b[value].toUpperCase();
    if (ascending ? nameA < nameB : nameA > nameB) {
      return -1;
    }
    if (ascending ? nameA > nameB : nameA < nameB) {
      return 1;
    }
    return 0;
  });
};

const sortByValue = (items: any, value: string, ascending = true): any[] => {
  return ascending
    ? items.sort((a: any, b: any) => a[value] - b[value])
    : items.sort((a: any, b: any) => b[value] - a[value]);
};

export { sortItems };

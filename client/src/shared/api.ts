import Asset from "./interfaces";

const API = "http://localhost:3001";

/**
 * Get Assets
 * @returns a list of assets
 */
const getAssets = async (): Promise<Asset[]> => {
  const data = await fetch(`${API}/assets`);
  return await data.json();
};

/**
 * Add Asset
 * @param asset contains user input (without id)
 * @returns the newly created asset (with id)
 */
const addAsset = async (asset: Asset): Promise<Asset> => {
  const response = await fetch(`${API}/assets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(asset),
  });
  return response.json();
};

const api = { addAsset, getAssets };

export default api;

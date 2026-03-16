import { electronicsData } from "./AllCategoryData";
import { networkingData } from "./AllCategoryData";
import { firesafetyData } from "./AllCategoryData";



export const allData = [
  electronicsData.map(item => ({
    ...item,
    category: "electronics"
  })),

  networkingData.map(item => ({
    ...item,
    category: "networking"
  })),

  firesafetyData.map(item => ({
    ...item,
    category: "firesafety"
  }))
];

searchItems.map(item => ({ ...item, category: item.category }));
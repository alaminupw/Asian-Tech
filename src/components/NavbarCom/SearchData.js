// SearchData.js

import { electronicsData } from "../Data/AllCategoryData";
import { networkingData }   from "../Data/AllCategoryData";
import { firesafetyData }   from "../Data/AllCategoryData";
import { searchData } from "../Data/AllCategoryData";


// সব আইটেম একটা ফ্ল্যাট অ্যারেতে রাখা সবচেয়ে সহজ
export const searchItems = [
  ...electronicsData.map(item => ({
    ...item,
    category: "electronics"
  })),
  
  ...networkingData.map(item => ({
    ...item,
    category: "networking"
  })),
  
  ...firesafetyData.map(item => ({
    ...item,
    category: "firesafety"
  })),

   ...searchData.map(item => ({
    ...item,
    category: "firesafety"
  })),
];
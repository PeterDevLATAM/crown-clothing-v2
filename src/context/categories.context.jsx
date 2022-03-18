import { createContext, useState, useEffect } from "react";

/* import SHOP_DATA from "../shop-data.js"; // only important to populate db*/

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap:{},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  /* 
  
  //Populates db with products
  useEffect(() => {
    addCollectionsAndDocuments("categories", SHOP_DATA);
  }, []); */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    };
    getCategoriesMap();//this is the proper way to do it. Call it in the same useEffect function after beeing initialized
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

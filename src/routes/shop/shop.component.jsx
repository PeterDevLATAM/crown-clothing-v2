import { CategoriesContext } from "../../context/categories.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";
import { Fragment } from "react";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);
  return (
    <Fragment>
      {
        //Object.keys returns an array with the keys of the object
        Object.keys(categoriesMap).map((title) => {
          return (
            <Fragment key={title}>
              <h2 key={title}>{title}</h2>
              <div className="products-container">
                {categoriesMap[title].map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </div>
            </Fragment>
          );
        })
      }
    </Fragment>
  );
};

export default Shop;

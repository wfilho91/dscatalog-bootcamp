import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsResponse } from "../../core/types/Product";
import { makeRequest } from "../../core/utils/request";
import ProductCard from "./components/ProductCard";
import ProductCardLoader from "./components/Loaders/ProductCardLoader";
import "./styles.scss";
import Pagination from "core/components/Pagination";

const Catalog = () => {
  //Quando a lista de produtos estiver disponivel,
  // popular um estado, e listar os produtos dinâmicamente
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  // quando o componente iniciar buscar a lista de produtos
  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 12,
    };

    // iniciando o loader
    setIsLoading(true);

    makeRequest({ url: "/products", params })
      .then((response) => setProductsResponse(response.data))
      .finally(() => {
        //finalizar loader
        setIsLoading(false);
      });
  }, [activePage]);

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catálogo de produtos</h1>
      <div className="catalog-products">
        {isLoading ? (
          <ProductCardLoader />
        ) : (
          productsResponse?.content.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))
        )}
      </div>
      {productsResponse && (
        <Pagination
          totalPages={productsResponse?.totalPages}
          activePage={activePage}
          onChange={page=>setActivePage(page)}
        />
      )}
    </div>
  );
};

export default Catalog;

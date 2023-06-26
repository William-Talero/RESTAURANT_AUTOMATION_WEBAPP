"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Content } from "../elements/PrincipalContainer";
import { CardContainer } from "../elements/ProductCard";
import ProductCard from "@/components/ProductCard";
import useGetAllProducts from "@/hooks/useGetAllProducts";
import { MenuTitle, CategoryName } from "@/elements/MenuElements";
import InputMenu from "@/components/InputMenu";
import SuggestProduct from "@/components/SuggestProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [cargando, setCargando] = useState(true);
  const [productsFilter, setProductsFilter] = useState([]);
  const [suggestProducts, setSuggestProducts] = useState({});
  const [category, setCategory] = useState("");
  const [existSuggestProducts, setExistSuggestProducts] = useState(false);
  const products = useGetAllProducts();

  useEffect(() => {
    products.length > 0 && (setCargando(false), setProductsFilter(products));
  }, [products]);

  return (
    <Container>
      <Content>
        <MenuTitle>Restaurant Menu</MenuTitle>
        <InputMenu
          products={products}
          setProductsFilter={setProductsFilter}
          setSuggestProducts={setSuggestProducts}
          setExistSuggestProducts={setExistSuggestProducts}
        />
        {!cargando && (
          <CardContainer>
            {existSuggestProducts && (
              <>
                <CategoryName>
                  <p>Nuestra Sugerencia</p>
                  <FontAwesomeIcon icon={faRobot} color="blue" bounce />
                </CategoryName>
                <SuggestProduct suggestProducts={suggestProducts} />
              </>
            )}
            {productsFilter.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                products={productsFilter}
                index={index}
                category={category}
                setCategory={setCategory}
              />
            ))}
          </CardContainer>
        )}
      </Content>
    </Container>
  );
}

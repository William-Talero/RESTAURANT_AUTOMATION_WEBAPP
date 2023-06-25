import Image from "next/image";
import { Container, Content } from "../elements/PrincipalContainer";
import { CardContainer } from "../elements/ProductCard";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <Container>
      <Content>
        <CardContainer>
          <ProductCard />
          <ProductCard />
        </CardContainer>
      </Content>
    </Container>
  );
}

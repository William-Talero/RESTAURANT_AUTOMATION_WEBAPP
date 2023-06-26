import {
  Card,
  CardSection,
  CardImage,
  CardTitle,
  CardDescription,
  TagsContainer,
  Tag,
  ButtonContainer,
  CardButton,
} from "../elements/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ICardData } from "@/interfaces/ProductCard.interface";

const ProductCard = ({ product }: { product: ICardData }) => {
  console.log(product);
  return (
    <Card>
      <CardSection
        width="50%"
        direction="column"
        align="flex-start"
        justify="space-between"
        padding="1.5rem"
      >
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
          {product.description.substring(0, 150) + "..."}
        </CardDescription>
        <TagsContainer>
          {product.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
        <ButtonContainer>
          <CardButton
            width="60%"
            height="2rem"
            bgColor="primary"
            radius=".3rem"
          >
            Ver Más
          </CardButton>
          <CardButton
            width="36%"
            height="2rem"
            bgColor="secondary"
            radius=".3rem"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </CardButton>
        </ButtonContainer>
      </CardSection>
      <CardSection width="50%">
        <CardImage src={product.image} alt="Tiramisu" />
      </CardSection>
    </Card>
  );
};

export default ProductCard;

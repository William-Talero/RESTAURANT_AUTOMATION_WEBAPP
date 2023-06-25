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
import tiramisuImage from "../assets/images/tiramisu.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = () => {
  return (
    <Card>
      <CardSection
        width="50%"
        direction="column"
        align="flex-start"
        justify="space-between"
        padding="1.5rem"
      >
        <CardTitle>Product Name</CardTitle>
        <CardDescription>
          El Tiramisú es un postre italiano tradicional que combina la
          cremosidad del mascarpone y los huevos, con la riqueza del café y el
          cacao. Su nombre, que significa alegrame el día.
        </CardDescription>
        <TagsContainer>
          <Tag>Tag 1</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 3</Tag>
        </TagsContainer>
        <ButtonContainer>
          <CardButton width="60%" height="2rem" bgColor="primary" radius=".3rem">Ver Más</CardButton>
          <CardButton width="36%" height="2rem" bgColor="secondary" radius=".3rem">
            <FontAwesomeIcon icon={faCartShopping} size="xs" transform="shrink-13"/>
          </CardButton>
        </ButtonContainer>
      </CardSection>
      <CardSection width="50%">
        <CardImage src={tiramisuImage} alt="Tiramisu" />
      </CardSection>
    </Card>
  );
};

export default ProductCard;

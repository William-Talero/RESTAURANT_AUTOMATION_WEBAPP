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
import { ISuggestCardData } from "@/interfaces/ProductCard.interface";

const SuggestProduct = ({
  suggestProducts,
}: {
  suggestProducts: ISuggestCardData;
}) => {
  return (
    <Card width="100%" marginBottom="4rem" animation="borderAnimation 1s infinite alternate">
      <CardSection
        width="50%"
        direction="column"
        align="flex-start"
        justify="space-between"
        padding="1.5rem"
      >
        <CardTitle ia>{suggestProducts ? suggestProducts.name : "--"}</CardTitle>
        <CardDescription>
          {suggestProducts
            ? suggestProducts.description?.substring(0, 150) + "..."
            : "--"}
        </CardDescription>
        <TagsContainer>
          {suggestProducts
            ? suggestProducts.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))
            : "--"}
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
        <CardImage
          src={suggestProducts ? suggestProducts.image : "--"}
          alt="Tiramisu"
        />
      </CardSection>
    </Card>
  );
};

export default SuggestProduct;

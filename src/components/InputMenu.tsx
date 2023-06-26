import { useState } from "react";
import { Form, Input } from "@/elements/MenuElements";
import useGetToken from "@/hooks/useGetToken";
import { CallApiGetSuggestProduct } from "@/api/CallAPI";
import { IMenuInputProps } from "@/interfaces/ProductCard.interface";

const InputMenu = ({ products, setProductsFilter }: IMenuInputProps) => {
  const [input, setInput] = useState("");

  const token = useGetToken();

  const getSuggestProducts = async () => {
    if (input !== "") {
      try {
        const body = JSON.stringify({
          prompt: input,
        });
        const { response } = await CallApiGetSuggestProduct(token, body);
        console.log(response);
        setProductsFilter(response.otherProducts);
      } catch (error) {
        console.log(error);
      }
    } else {
      setProductsFilter(products);
    }
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    switch (name) {
      case "search":
        setInput(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getSuggestProducts();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Buscar..."
      />
    </Form>
  );
};

export default InputMenu;
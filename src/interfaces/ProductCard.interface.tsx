export interface ICard {
  width?: string;
  height?: string;
  marginBottom?: string;
  animation?: string;
}

export interface ICardSection {
  width?: string;
  height?: string;
  direction?: string;
  justify?: string;
  align?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  shadow?: string;
  overflow?: string;
}

export interface ICardTitle {
  ia?: boolean;
}

export interface ICardButton {
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  radius?: string;
  shadow?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  transition?: string;
  hoverTransition?: string;
  disabled?: boolean;
  disabledBgColor?: string;
  border?: string;
  bgColorHover?: string;
  colorHover?: string;
  shadowHover?: string;
}

export interface IMenuProduct {
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
  tags: string[];
  top: number;
  __v: number;
  _id: string;
}

export interface ICardData {
  product: IMenuProduct;
  products: Array<IMenuProduct>;
  index: number;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
}

export interface ISuggestCardData {
  category?: string;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
  tags?: string[];
  top?: number;
  __v?: number;
  _id?: string;
}

export interface IMenuInputProps {
  products: Array<IMenuProduct>;
  setProductsFilter: React.Dispatch<React.SetStateAction<any>>;
  setSuggestProducts: React.Dispatch<React.SetStateAction<any>>;
  setExistSuggestProducts: React.Dispatch<React.SetStateAction<any>>;
}

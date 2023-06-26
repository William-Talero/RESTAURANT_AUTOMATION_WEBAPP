import {
  GetApiRequest,
  GetApiRequestWithoutToken,
  PostApiRequest,
  PostApiRequestWithoutToken,
  PutApiRequest,
  PostApiRequestFormData,
  DeleteApiRequest,
} from "./FetchRequest";
import Configuration from "./Configuration";

console.log(process.env.NEXT_PUBLIC_REACT_APP_API_RUTE);

export const CallApiGetToken = async () => {
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_API_RUTE}${Configuration.Authentication}`;
  const data = await GetApiRequestWithoutToken(`${url}`);
  return data ? await data.json() : [];
};

export const CallApiGetAllProducts = async (token: string) => {
  console.log(token);
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_API_RUTE}${Configuration.GetAllProducts}`;
  const data = await GetApiRequest(`${url}`, token);
  return data ? await data.json() : [];
};

export const CallApiGetSuggestProduct = async (token: string, body: string) => {
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_API_RUTE}${Configuration.GetSuggestProduct}`;
  const data = await PostApiRequest(`${url}`, token, body);
  return data ? await data.json() : [];
};

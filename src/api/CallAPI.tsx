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

export const CallApiGetToken = async () => {
  let url = `${process.env.REACT_APP_API_RUTE}${Configuration.Authentication}`;
  const data = await GetApiRequestWithoutToken(`${url}`);
  return data ? await data.json() : [];
};

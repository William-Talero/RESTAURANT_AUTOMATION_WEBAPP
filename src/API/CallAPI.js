import {
  GetApiRequest,
  GetApiRequestWithoutToken,
  PostApiRequest,
  PostApiRequestWithoutToken,
  PutApiRequest,
  PostApiRequestFormData,
  DeleteApiRequest,
} from "./FetchRequest";
import Configuration from "./config";

export const CallApiGetToken = async () => {
  let url = `${process.env.REACT_APP_API_RUTE}${Configuration.Authentication}`;
  let data = await GetApiRequestWithoutToken(`${url}`);
  return await data.json();
};

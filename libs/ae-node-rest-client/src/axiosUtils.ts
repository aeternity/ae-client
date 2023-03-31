import axios, { AxiosResponse, Method } from "axios";
import { z } from "zod";

export async function aeAxiosRequest(
  url: string,
  method: Method,
  data?: object
) {
  const resp: AxiosResponse = await axios
    .request({
      method,
      url,
      params: { "int-as-string": true, ...data },
    })
    .catch((err) => {
      if (err.response) {
        // Request made and server responded
        console.debug(
          `Request made and server responded with code: ${err.response.status} data:`,
          err.response.data
        );
        return err.response;
      } else if (err.request) {
        // The request was made but no response was received
        console.error(url);
        console.error(
          "Request was made but no response from server: ",
          err.request
        );
        throw new Error(err.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", err.message);
        throw new Error(err.message);
      }
    });
  // console.debug(resp.config.url, resp.config.params);
  return resp;
}

export function throwUnexpectedResponseError(resp: AxiosResponse): never {
  console.error(resp.data);
  throw new Error(
    `Unexpected status code ${resp.status} from ${resp.config.url}`
  );
}

// This function is used when it's OK for the response to be 404 Not Found.
// In that case, the function returns null.
// If the requested resource is found, the function returns the parsed (via Zod) response.
export const parseNullableResponse = <T extends z.ZodTypeAny>(
  resp: AxiosResponse,
  decoder: T
): z.infer<typeof decoder> | null => {
  if (resp.status === 200) {
    return decoder.parse(resp.data);
  } else if (resp.status === 404) {
    return null;
  } else {
    return throwUnexpectedResponseError(resp);
  }
};

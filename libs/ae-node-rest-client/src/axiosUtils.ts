import axios, { AxiosResponse, Method } from "axios";

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
  console.info(resp.config.url, resp.config.params);
  return resp;
}

export function throwUnexpectedResponseError(resp: AxiosResponse): never {
  console.error(resp.data);
  throw new Error(
    `Unexpected status code ${resp.status} from ${resp.config.url}`
  );
}

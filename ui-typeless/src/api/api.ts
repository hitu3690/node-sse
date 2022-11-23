import axios, { AxiosInstance } from "axios";
import _ from "lodash";
import { ApiResult } from "./apiResult";

export abstract class Api {
  private client: AxiosInstance;
  private _baseUrl: string;

  constructor(baseUrl: string = "") {
    this._baseUrl = baseUrl;
    this.client = axios.create({ baseURL: this._baseUrl });

    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        try {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              error.response.data = JSON.parse(
                (reader.result || "").toString()
              );
              resolve(Promise.reject(error));
            };

            reader.onerror = () => {
              reject(error);
            };

            reader.readAsText(error.response.data);
          });
        } catch (e) {
          console.error(e);
        }

        return Promise.reject(error);
      }
    );
  }

  protected _buildUrl(
    url: string,
    pathParams: { [s: string]: any },
    queryParams: { [s: string]: any }
  ): string {
    const resultUrl: string = "https://jsonplaceholder.typicode.com/posts";
    return resultUrl;
  }

  protected async _get<T>(url: string): Promise<ApiResult<T>> {
    return this.client.get<T>(url, {
      withCredentials: true,
    });
  }
  protected async _post<T>(url: string, body?: object): Promise<ApiResult<T>> {
    return this.client.post<T>(url, body, {
      withCredentials: true,
    });
  }
}

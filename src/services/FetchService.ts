export interface ComonError {
  statusCode: number;
  Message: string;
}

export interface Response {
  data?: any;
  error?: ComonError;
}

export default class FetchService {
  private baseURI: string;

  constructor(url: string) {
    this.baseURI = url;
  }

  private formatURL = (resource: string) => this.baseURI + resource;

  private sendRequest = async <T>(uri: string): Promise<T> => {
    return fetch(uri).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<{ data: T }>
    }).then(data => {
      return data.data;
    });
  }

  public get = async <T>(resource: string) => {
    const uri = this.formatURL(resource);
    return await this.sendRequest<T>(uri);
  }
}

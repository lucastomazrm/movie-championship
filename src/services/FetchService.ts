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

  private sendRequest = (uri: string) => fetch(uri)
    .then(async (response) => {
      if (!response.ok) {
        return { error: await response.json(), data: null };
      }
      return { error: null, data: await response.json() };
    })
    .catch(error => ({ error: error.message, data: null }));

  public get(resource: string) {
    const uri = this.formatURL(resource);
    return this.sendRequest(uri);
  }
}

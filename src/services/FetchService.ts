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

  private getHeaders = () => new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  private sendRequest = (uri: string, requestInfo: RequestInit) => fetch(uri, requestInfo)
    .then(async (response) => {
      if (!response.ok) {
        return { error: await response.json(), data: null };
      }
      return { error: null, data: await response.json() };
    })
    .catch(error => ({ error: error, data: null }));

  get(resource: string) {
    const uri = this.formatURL(resource);
    const requestInfo = {
      headers: this.getHeaders(),
    };
    return this.sendRequest(uri, requestInfo);
  }
}

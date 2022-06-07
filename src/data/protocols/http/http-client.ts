export type HttpRequest = {
  body?: any;
};

export interface httpClient<R = any> {
  request(data?: HttpRequest): Promise<R>;
}

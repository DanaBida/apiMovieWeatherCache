import fetch from 'node-fetch';

export class DataAccess {
 private baseUrl: string;
 private apiKey: { key: string; value: string };

 constructor(baseUrl: string, apiKey: { key: string; value: string }) {
  this.baseUrl = baseUrl;
  this.apiKey = apiKey;
 }

 apiRequest = async queryParams => {
  let url = `${this.baseUrl}?`;
  Object.keys(queryParams).forEach(key => (url = url.concat(`${key}=${queryParams[key]}&`)));
  url = url.concat(`${this.apiKey.key}=${this.apiKey.value}`);
  const headers = { Accept: 'application/json' };
  console.log('calling to api: ', url);
  try {
   const response = await fetch(url, headers);
   return response.json();
  } catch (err) {
   console.error('Failed to fetch from api: ', url);
  }
 };
}

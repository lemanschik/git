/* eslint-env browser */
import './typedefs-http.js'

export const HttpClientToFetch = ({
  onProgress,
  url,
  method = 'GET',
  headers = {},
  body,
}) => [url,{ method, headers, body}]

/**
 * HttpClient
 */
export const request = (arg) =>
  fetch.call(fetch, HttpClientToFetch(arg)).then((res) => ({
    url: res.url,
    method: res.method,
    statusCode: res.status,
    statusMessage: res.statusText,
    body: res?.body?.arrayBuffer(),
    headers: res.headers,
  }));

export default { request }

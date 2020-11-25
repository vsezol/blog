import base64 from 'base-64';
import fp from 'lodash/fp';

import AppConfig from '@/app.config';

const clientId = AppConfig.github.clientId;
const clientSecret = AppConfig.github.clientSecret;
const baseUrl = AppConfig.github.baseUrl;

export async function getPost(postName: string) {
  const url = withAuth(`/repos/vsezol/blog-posts/contents/${postName}`);
  const response = await fetch(url);
  const data = await response.json();
  const content = base64.decode(data.content);
  return content;
}

function withAuth(url: string) {
  return fp.compose(withBase, withCreds)(url);
}

function withBase(url: string) {
  return baseUrl + url;
}

function withCreds(url: string) {
  url = endBy('?')(url);
  return `${url}client_id=${clientId}&client_secret=${clientSecret}`;
}

function endBy(value: string) {
  return (str: string) => (str.slice(-1) === value ? str : str + value);
}

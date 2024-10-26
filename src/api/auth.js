// auth.js

export function auth(username, password) {
  const base64Credentials = btoa(`${username}:${password}`);
  return `Basic ${base64Credentials}`;
}

import {API} from "../api";

export default async function getProducts(alias: string) {
  const res = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({category: alias, limit: 10}),
    headers: new Headers({"content-type": "application/json"}),
  });
  return res.json();
}

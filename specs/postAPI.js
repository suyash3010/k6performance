import http from "k6/http";
import { sleep, check } from "k6";
export const options = {
  vus: 1,
  duration: "5s",
};
export default function () {
  const url = "https://dummyjson.com/auth/login";
  const payload = JSON.stringify({
    username: "emilys",
    password: "emilyspass",
  });

  const params = {
    headers: { "Content-Type": "application/json" },
  };
  const res = http.post(url, payload, params);
  sleep(1);
  check(res, {
    "res is 200": (r) => r.status === 200,
    "body has username": (r) => r.body.includes("emily"),
  });
}

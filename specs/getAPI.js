import http from "k6/http";
import { sleep } from "k6";
export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: "shared-iterations",
      vus: 10,
      iterations: 200,
      maxDuration: "30s",
    },
  },
};
export default function () {
  http.get("http://test.k6.io");
  sleep(1);
}

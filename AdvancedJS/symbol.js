import { birthKey, emailsKey } from "./keys.js";

export default {
  firstName: "WJ",
  lastName: "Twitter",
  age: 33333,
  [birthKey]: new Date(1234, 10, 14, 15, 23),
  [emailsKey]: ["thesecon@gmail.com", "abc@naver.com"],
};

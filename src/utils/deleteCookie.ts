import { setCookie } from "./setCookie";

export function deleteCookie(name: string) {
  setCookie(name, false, { expires: -1 });
}

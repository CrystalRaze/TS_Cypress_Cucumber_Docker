import type { Credentials } from "../../interfaces/e2e/login_page_interfaces_e2e";
import { LOGIN_PAGE } from "../../pageobjects/login_page";

export const loginWithCredentials = ({ username = "{backspace}", password = "{backspace}" }: Credentials): void => {
  LOGIN_PAGE.usernameInput.clear();
  LOGIN_PAGE.usernameInput.type(username);
  LOGIN_PAGE.passwordInput.clear();
  LOGIN_PAGE.passwordInput.type(password);
  LOGIN_PAGE.loginButton.click();
};

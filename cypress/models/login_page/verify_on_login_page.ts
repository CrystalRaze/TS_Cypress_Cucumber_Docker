import { LOGIN_PAGE } from "../../pageobjects/login_page";

export const userNameIsRequired = (errorMessage: string) => {
  LOGIN_PAGE.usernameError.should("be.visible");
  LOGIN_PAGE.usernameError.should("have.text", errorMessage);
};

export const passwordIsRequired = (errorMessage: string) => {
  LOGIN_PAGE.passwordError.should("be.visible");
  LOGIN_PAGE.passwordError.should("have.text", errorMessage);
};

export const credentialsAreRequired = () => {
  LOGIN_PAGE.usernameError.should("be.visible");
  LOGIN_PAGE.passwordError.should("be.visible");
};

export const logoIsDisplayed = () => {
  LOGIN_PAGE.Logo.invoke("attr", "src")
    .then((src) => {
      return cy
        .request({
          method: "GET",
          url: src
        })
        .then((response) => {
          return response.headers["content-type"];
        });
    })
    .should("eq", "image/svg+xml");
};

export const mainFormIsDisplayed = () => {
  LOGIN_PAGE.mainForm.should("be.visible");
  LOGIN_PAGE.formHeader.should("have.text", "AQA internship Login");
};

export const placeholdersAreValid = () => {
  LOGIN_PAGE.usernameInput.invoke("attr", "placeholder").should("eq", "Username");
  LOGIN_PAGE.passwordInput.invoke("attr", "placeholder").should("eq", "Password");
};

export const loginButtonIsDisplayed = () => {
  LOGIN_PAGE.loginButton.should("be.visible");
  LOGIN_PAGE.loginButton.invoke("attr", "value").should("eq", "Login");
};

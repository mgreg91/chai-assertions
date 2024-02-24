import {$} from '@wdio/globals';

class LoginPage {
  get inputUserEmail() {
    return $('#user');
  }

  get inputPassword() {
    return $('#password');
  }

  get btnLogin() {
    return $('#login');
  }

  get btnLoginSubmit() {
    return $('#login-submit');
  }
}

export default new LoginPage();

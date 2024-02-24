import {browser} from '@wdio/globals';
import config from './config.js';
import LoginPage from '../pageobjects/login.page.js';
import ProfilePage from '../pageobjects/profile.page.js';

class Utility {
  async waitUntilPageLoads(timeout = 60000) {
    await browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
          timeout,
          timeoutMsg: `The page didn't load after ${timeout}ms`,
        },
    );
  }

  async waitUntilPageOpened(url, timeout = 60000) {
    await browser.waitUntil(
        async function() {
          const currentUrl = await browser.getUrl();
          return currentUrl.includes(url);
        },
        {
          timeout,
        },
    );
  }

  async waitUntilElemDisplayed(elem, timeout = 15000) {
    await browser.waitUntil(
        async function() {
          return elem.isDisplayed();
        },
        {
          timeout,
        },
    );
  }

  async waitAndClick(elem, timeout = 5000) {
    await elem.waitForDisplayed({timeout});
    await elem.waitForClickable();
    await elem.click();
  }

  async login(email, password) {
    await browser.url(config.LOGINPAGE_URL);
    await LoginPage.inputUserEmail.setValue(email);
    await LoginPage.btnLogin.click();
    await this.waitUntilPageLoads();
    await LoginPage.inputPassword.waitForDisplayed();
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.btnLoginSubmit.click();
    await this.waitUntilElemDisplayed(ProfilePage.avatar);
    await this.waitUntilPageLoads();
  }
}

export default new Utility();

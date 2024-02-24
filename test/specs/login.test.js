import {expect} from 'chai';
import config from '../utils/config.js';
import Utility from '../utils/utility.js';

describe('Verify login functionality', () => {
  beforeEach(async function() {
    await Utility.login(config.USER_EMAIL, config.USER_PW);
    await Utility.waitUntilPageLoads();
  });

  it('should login with valid credentials', async () => {
    await Utility.waitUntilPageLoads();
    const url = await browser.getUrl();
    const length = config.PAGE_URL.length;
    expect(url).to.include(config.PAGE_URL);
    expect(url).to.have.lengthOf(length);
  });
});

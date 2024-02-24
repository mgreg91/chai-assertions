import {assert} from 'chai';
import config from '../utils/config.js';
import Utility from '../utils/utility.js';
import ProfilePage from '../pageobjects/profile.page.js';

describe('Verify that the profile has no card', () => {
  beforeEach(async function() {
    await Utility.login(config.USER_EMAIL, config.USER_PW);
    await Utility.waitUntilPageLoads();
  });

  it('should not have cards in profile', async () => {
    const message = await ProfilePage.hasExistingCard();
    assert.typeOf(message, 'string');
    assert.equal(message, config.MISSING_CARD_MSG);
  });
});

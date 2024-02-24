import {should} from 'chai';
import config from '../utils/config.js';
import Utility from '../utils/utility.js';
import MembersPage from '../pageobjects/members.page.js';
should();

describe('Verify the members of the board', () => {
  beforeEach(async function() {
    await Utility.login(config.USER_EMAIL, config.USER_PW);
    await Utility.waitUntilPageLoads();
  });

  it('should return an object representing the member', async () => {
    const member = await MembersPage.getMemberInfos();
    member.should.be.a('object');
    member.fullName.should.contain(config.USER_NAME);
    member.profileName.should.not.include('_');
  });
});

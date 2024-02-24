import {$} from '@wdio/globals';
import Utility from '../utils/utility.js';

class MembersPage {
  get btnMembers() {
    return $('div > a[href*="members"]');
  }

  get imgMemberAvatar() {
    return $('.member-avatar');
  }

  get txtFullName() {
    return $('.full-name');
  }

  get txtUserProfileName() {
    return $('.quiet .u-inline-block > span');
  }

  async getMemberInfos() {
    await this.btnMembers.click();
    await Utility.waitUntilElemDisplayed(this.imgMemberAvatar);
    const fullName = await this.txtFullName.getText();
    const profileName = await this.txtUserProfileName.getText();
    const memberInfo = {fullName, profileName};
    return memberInfo;
  }
}

export default new MembersPage();

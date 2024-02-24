import {$} from '@wdio/globals';
import Utility from '../utils/utility.js';

class ProfilePage {
  get avatar() {
    return $('div[data-testid="header-member-menu-avatar"]');
  }
  get cardsMenu() {
    return $('a[data-testid="account-menu-cards"]');
  }
  get divExistingCards() {
    return $('.ow1HW_1GFxxZ00');
  }

  async hasExistingCard() {
    await this.avatar.click();
    await Utility.waitUntilElemDisplayed(this.cardsMenu);
    await this.cardsMenu.click();
    await Utility.waitUntilElemDisplayed(this.divExistingCards);
    const message = await this.divExistingCards.getText();
    return message;
  }
}

export default new ProfilePage();

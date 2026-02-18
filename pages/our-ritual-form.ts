import { Page, expect } from "@playwright/test";

export class OurRitualForm {
  private readonly startButton: string = '//span[@class="box__Box-sc-56kweq-0 gInyWf"]';
  private readonly singleRelationshipStatus: string = "#radio-6185-897d-d0b-f26f";
  private readonly therapyCouplesYesOption: string = "#radio-0d41-9568-45e-1cd0";
  private readonly helpOptionForImprovingCommunication: string = "#checkbox-0592-20b1-078-830c";
  private readonly helpOptionmanagingConflictBetter: string = "#checkbox-9e3f-f388-6c5-54b5";
  private readonly helpOptionOvercomingInfidelity: string = "#checkbox-81b5-f20b-09f-6ccc";

  constructor(private readonly page: Page) {}

  public async clickOnTheStartButton() {
    await this.page.locator(this.startButton).click();
  }

  public async clickOnTheSingleRelationshipStatus() {
    await this.page.locator(this.singleRelationshipStatus).click();
  }

  public async clickOnTheTherapyCouplesYesOption() {
    await this.page.locator(this.therapyCouplesYesOption).click();
  }

  public async clickOnTheHelpOptionForImprovingCommunication() {
    await this.page.locator(this.helpOptionForImprovingCommunication).click();
  }

  public async clickOnTheHelpOptionmanagingConflictBetter() {
    await this.page.locator(this.helpOptionmanagingConflictBetter).click();
  }

  public async clickOnTheHelpOptionOvercomingInfidelity() {
    await this.page.locator(this.helpOptionOvercomingInfidelity).click();
  }
}

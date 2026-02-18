import { test, expect } from "@playwright/test";
import { SearchResultsPage } from "../pages/search-results";
import { TeamDetailsPage } from "../pages/team-details";
import { OurRitualForm } from "../pages/our-ritual-form";

import { ProfilePage } from "../pages/profile";
import { BasePage } from './../pages/base.page';

// test("Global Search @smoke", async ({ page }) => {
//     const basePage = new BasePage(page);
//     const searchResultsPage = new SearchResultsPage(page);
//     const teamDetailsPage = new TeamDetailsPage(page);
//     await page.goto("/");
//     await basePage.globalSearch.clickOnTheGlobalSearch();
//     await basePage.globalSearch.performSearchInGlobalSearch("Arsenal");
//     await searchResultsPage.clickOnTheFirstTeam();
//     await teamDetailsPage.verifyTeamHeaderDisplayed()
//   });

test("Test @debug", async ({ page }) => {
    const basePage = new BasePage(page);
    const ourRitualForm = new OurRitualForm(page);
    await page.goto("");
    // await page.frameLocator('[data-testid="iframe"]').getByRole('button', { name: 'Start' }).click();
    await ourRitualForm.clickOnTheStartButton();
    await ourRitualForm.clickOnTheSingleRelationshipStatus();
    await ourRitualForm.clickOnTheTherapyCouplesYesOption();
    await ourRitualForm.clickOnTheHelpOptionForImprovingCommunication();
    await ourRitualForm.clickOnTheHelpOptionmanagingConflictBetter();
    await ourRitualForm.clickOnTheHelpOptionOvercomingInfidelity();
  });
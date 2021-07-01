package com.nopcommerce.demo.cucumber.stepDefs;

import com.nopcommerce.demo.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputersStepdefs {
    @When("^I click on computers tab$")
    public void iClickOnComputersTab() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().clickOnComputerTab();
    }

    @Then("^I should be able to navigate to computers page successfully$")
    public void iShouldBeAbleToNavigateToComputersPageSuccessfully() {
    }

    @And("^I should able to see \"([^\"]*)\" as title on computers page$")
    public void iShouldAbleToSeeAsTitleOnComputersPage(String expectedPageTitle) {
        Assert.assertEquals(expectedPageTitle,new ComputerPage().getComputerNavigationText());
    }


    @When("^I mouse hover on computers tab$")
    public void iMouseHoverOnComputersTab() {
        new HomePage().mouseHoverOnComputerTab();
    }

    @And("^I mouse hover and click on \"([^\"]*)\" from computers drop down menu$")
    public void iMouseHoverAndClickOnFromComputersDropDownMenu(String productName) throws InterruptedException {
       new HomePage().selectFromComputerSubMenu(productName);
    }

    @Then("^I should be able to navigate to Desktops page successfully$")
    public void iShouldBeAbleToNavigateToDesktopsPageSuccessfully() {

    }

    @And("^I should be able to see \"([^\"]*)\" as title on Desktops page$")
    public void iShouldBeAbleToSeeAsTitleOnDesktopsPage(String expectedPageTitle)  {
       Assert.assertEquals(expectedPageTitle,new DesktopPage().getDesktopPageNavigationText());
    }

    @Then("^I should be able to navigate to Notebooks page successfully$")
    public void iShouldBeAbleToNavigateToNotebooksPageSuccessfully() {
    }

    @And("^I should be able to see \"([^\"]*)\" as title on Notebooks page$")
    public void iShouldBeAbleToSeeAsTitleOnNotebooksPage(String expectedPageTitle) {
        Assert.assertEquals(expectedPageTitle,new NotebooksPage().getNotebooksPageNavigationText());
    }

    @Then("^I should be able to navigate to Software page successfully$")
    public void iShouldBeAbleToNavigateToSoftwarePageSuccessfully() {
    }

    @And("^I should be able to see \"([^\"]*)\" as title on Software page$")
    public void iShouldBeAbleToSeeAsTitleOnSoftwarePage(String expectedPageTitle) {
        Assert.assertEquals(expectedPageTitle,new SoftwarePage().getSoftwarePageNavigationText());
    }
}

package com.nopcommerce.demo.cucumber.stepDefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {

        new HomePage().clickOnLoginTab();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
    }

    @And("^I should be able to see \"([^\"]*)\"$")
    public void iShouldBeAbleToSee(String expectedMessage)  {
        Assert.assertEquals(expectedMessage,new LoginPage().getWelcomeLoginText());
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {

        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {

    }

    @And("^I should be able to see \"([^\"]*)\" option$")
    public void iShouldBeAbleToSeeOption(String expectedText)  {
        Assert.assertEquals(expectedText,new LoginPage().getLogOutText());
    }

    @And("^I enter email\"([^\"]*)\"$")
    public void iEnterEmail(String email) throws InterruptedException {
        Thread.sleep(1000);
        new LoginPage().enterEmail(email);
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage)  {
        Assert.assertTrue(new LoginPage().getErrorMessage().contains(errorMessage));
    }



}

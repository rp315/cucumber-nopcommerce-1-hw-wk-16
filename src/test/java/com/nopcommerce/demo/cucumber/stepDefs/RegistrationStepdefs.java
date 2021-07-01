package com.nopcommerce.demo.cucumber.stepDefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.junit.Assert;

public class RegistrationStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterTab();
    }

    @Then("^I should be able to navigate to the registration page$")
    public void iShouldBeAbleToNavigateToTheRegistrationPage() {

    }

    @And("^I should be able to see \"([^\"]*)\" page title$")
    public void iShouldBeAbleToSeePageTitle(String expectedMessage)  {
        Assert.assertEquals(expectedMessage, new RegisterPage().getTextRegisterText());
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstName) throws InterruptedException {
        Thread.sleep(1000);
        new RegisterPage().enterFirstName(firstName);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName) throws InterruptedException {
        Thread.sleep(1000);
        new RegisterPage().enterLastName(lastName);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String emailID) throws InterruptedException {
       Thread.sleep(1000);
       new RegisterPage().enterEmail(emailID);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) throws InterruptedException {
        Thread.sleep(1000);
        new RegisterPage().enterPassword(password);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword) throws InterruptedException {
        Thread.sleep(1000);
       new RegisterPage().enterConfirmPassword(confirmPassword);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {

        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should be able to register$")
    public void iShouldBeAbleToRegister() {
    }

    @And("^I should be able to see \"([^\"]*)\" message$")
    public void iShouldBeAbleToSeeMessage(String expectedMessage)  {
     Assert.assertEquals(expectedMessage,new RegisterPage().getRegistrationCompleteText());
    }


    @Then("^I should be able to see \"([^\"]*)\" under first name field$")
    public void iShouldBeAbleToSeeUnderFirstNameField(String expectedErrorMessage)  {

        Assert.assertEquals(expectedErrorMessage,new RegisterPage().getErrorMessage());

    }
}

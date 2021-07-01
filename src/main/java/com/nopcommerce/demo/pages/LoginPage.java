package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeLoginText;
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailField;
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordField;
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logOutText;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;



    public String getWelcomeLoginText(){

        log.info("Navigate to register page and verify navigated page welcome text "+ welcomeLoginText.toString());
        return welcomeLoginText.getText();
    }

    public void enterEmail(String email) {

        sendTextToElement(emailField, email);
        log.info("Entering email address : " + email + " to email field : " + emailField.toString());
    }

    public void enterPassword(String password) {

        sendTextToElement(passwordField, password);
        log.info("Entering password : " + password + " to password field : " + passwordField.toString());
    }

    public void clickOnLoginButton(){

        clickOnElement(loginButton);
        log.info("Clicking on login button " + loginButton.toString());
    }

    public String getLogOutText(){

        log.info("Page Navigation with welcome Text from element "+ logOutText.toString());
        return logOutText.getText();
    }

    public String getErrorMessage() {

        log.info("Getting invalid credentials error message " + errorMessage.toString());
        return errorMessage.getText();
    }

}

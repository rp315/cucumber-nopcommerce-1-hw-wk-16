package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import java.util.List;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement registerText;
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstNameField;
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastNameField;
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailField;
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordField;
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPasswordField;
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement registerButton;
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement errorMessage;

    @FindBys(@FindBy(xpath = "//div[@class='form-fields']//div[@class='inputs']//span[@class='field-validation-error']"))
    List <WebElement> fieldsErrorMessage;

    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registrationCompleteText;


    public String getTextRegisterText() {
        log.info("Navigate to register page and verify navigated page welcome text " + registerText.toString());
        return registerText.getText();
    }

    public void enterFirstName(String firstName) {

        sendTextToElement(firstNameField, firstName);
        log.info("Entering first name : " + firstName + " to email field : " + firstNameField.toString());
    }

    public void enterLastName(String lastName) {

        sendTextToElement(lastNameField, lastName);
        log.info("Entering last name : " + lastName + " to last name field : " + lastNameField.toString());
    }

    public void enterEmail(String email) {

        sendTextToElement(emailField,email);
        log.info("Entering email address : " +emailField + " to email field : " + emailField.toString());
    }

    public void enterPassword(String password) {

        sendTextToElement(passwordField, password);
        log.info("Entering password : " + password + " to password field : " + passwordField.toString());
    }

    public void enterConfirmPassword(String confirmPassword) {

        sendTextToElement(confirmPasswordField, confirmPassword);
        log.info("Entering confirm password : " + confirmPassword + " to confirm password field : " + confirmPasswordField.toString());
    }

    public void clickOnRegisterButton() {

        clickOnElement(registerButton);
        log.info("Clicking on register button " + registerButton.toString());

    }

    public String getErrorMessage() {

        log.info("Getting empty mandatory field error message "+ errorMessage.toString());
        return errorMessage.getText();

    }

    public String getRegistrationCompleteText() {

        log.info("Getting registration completed message "+ registrationCompleteText.toString());
        return registrationCompleteText.getText();

    }

/*
    public String getFieldErrorMessage (String fieldName) throws InterruptedException {


        for (WebElement element : fieldsErrorMessage) {
            log.info("Getting text from field's error element " + element.toString());

            if (element.getText().contains(fieldName)) {
                Thread.sleep(1000);
                element.getText();
                break;
            }
        }

        return element;

    }*/

}

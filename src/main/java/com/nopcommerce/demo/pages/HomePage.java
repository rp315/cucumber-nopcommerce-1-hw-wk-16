package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement loginTab;
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    WebElement registerTab;
    @FindBy(xpath = "(//a[@href='/computers'])[1]")
    WebElement computerTab;
    @FindBys(@FindBy(xpath = "(//ul[@class='sublist first-level'])[1]//li"))
    List<WebElement> computerSubMenuList;



    public void clickOnLoginTab() {
        clickOnElement(loginTab);
        log.info("Clicking on login tab element " + loginTab.toString());

    }

    public void clickOnRegisterTab() {
        clickOnElement(registerTab);
        log.info("Clicking on register tab element " + registerTab.toString());
    }

    public void mouseHoverOnComputerTab() {
        mouseHoverToElement(computerTab);
        log.info("Mouse hover on computer tab element " + computerTab.toString());

    }

    public void clickOnComputerTab(){
        clickOnElement(computerTab);
        log.info("Clicking on computer tab element " + computerTab.toString());

    }




    public void selectFromComputerSubMenu(String product) throws InterruptedException {

        for (WebElement element : computerSubMenuList) {
            log.info("Getting text from computer sub product element " + element.toString());
            if (element.getText().equalsIgnoreCase(product)) {
                Thread.sleep(1000);
                mouseHoverToElementAndClick(element);
                log.info("Clicking computer sub menu product element " + element.toString());
                break;

            }

        }
    }
}










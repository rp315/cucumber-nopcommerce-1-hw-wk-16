package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ComputerPage extends Utility {

   private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

   @FindBy(xpath = "//h1[contains(text(),'Computers')]")
   WebElement computerText;

   public String getComputerNavigationText(){
      log.info("Navigate to computer page and verify navigated page welcome text "+ computerText.toString());
      return computerText.getText();

   }
}

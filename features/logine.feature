Feature: sauce demo login functionality
   Background: 
        Given user open "chrome" browser
        And user navigate to "https://www.saucedemo.com"


      @negative @regression
#    Scenario: verify user able to see error msg for empty username and valid password
     Scenario Outline: verify user able to see error msg for <scenario>

     #    Given user open "chrome" browser
     #    And user navigate to "https://www.saucedemo.com"
         When user enter "<username>" in username
         And user enter "<password>" in password
         And user click on login button
         Then user validate error msg "<errormsg>"

         Examples:
             |Scenario             | username      | password     | errormsg | 
             | empty username      |               | secret_sauce |          |
             | empty password      | standard_user |              |          |
             | invalid credentials | asdfghjklmnb  | aedgugyftdtfk|          |

#    Scenario: verify user able to see error msg for valid username and empty password
        #  Given user open "chrome" browser
        #  And user navigate to "https://www.saucedemo.com"
     #     When user enter "standard_user" in username
     #     And user enter "" in password
     #     And user click on login button
     #     Then user validate error msg ""


#    Scenario: verify user able to see error msg for invalid username and invalid password
        #  Given user open "chrome" browser
        #  And user navigate to "https://www.saucedemo.com"
     #     When user enter "afdddgmhgfhghmhfhf" in username
     #     And user enter "agfshdhfjftdgrshfjy" in password
     #     And user click on login button
     #     Then user validate error msg ""

     @positive @smoke @sanity
   Scenario: verify user able to see dashboard for valid username and valid password
     #     Given user open "chrome" browser
     #     And user navigate to "https://www.saucedemo.com"
         When user enter "standard_user" in username
         And user enter "secret_sauce" in password
         And user click on login button
         Then user validate "https://sdfas"
     #     Then user validate dashboard
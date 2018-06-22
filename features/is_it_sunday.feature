Feature: Is it Sunday?
Everyone wants to know when is it sunday for holidays


  Scenario: Friday, it's not sunday
    Given today is Friday
    When I ask for Sunday
    Then it should say "no"
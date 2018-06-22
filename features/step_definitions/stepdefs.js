const assert = require('assert');
const { Given, When, Then } = require('cucumber');
/*
When I ask for Sunday
Then I it should say "no"*/

function getAnswer(ans){
    return ans=='Sunday'?'yes':'no';
}

Given("today is Friday", function () {
    this.today = 'Friday';
});

When('I ask for Sunday', function () {
    this.actualAnswer = getAnswer(this.today)
  });
  
Then('it should say {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer)
});

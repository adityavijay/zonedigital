const assert = require('assert');
const {Given, When, Then, setDefaultTimeout} = require('cucumber');

function getAnswer(day){
    return this.today=='Sunday'?'yes':'no';
}

Given("today is Friday",function(x){
    this.today = 'Friday';
});

When('I ask for sunday',function(){
    this.actualAnswer = getAnswer(this.today);
});

Then('Then It should say {string}, today is Friday',function(expectedAnswer){
    assert.equal(this.actualAnswer, expectedAnswer);
});

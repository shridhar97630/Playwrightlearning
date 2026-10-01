import {Given, When, Then} from '@cucumber/cucumber';

Given('user open {string} browser', async function (browser) {
    console.log("step1 " + browser );
})

Given('user navigate to {string}', async function (url) {
    console.log("step2 " + url );
})

When('user enter {string} in username', async function (username) {
    console.log("step3 " + username );
})

When('user enter {string} in password', async function (password) {
    console.log("step4 " + password );
})

When('user click on login button', async function () {
    console.log("step5" );
})

Then('user validate error msg {string}', async function (errormsg) {
    console.log("step6 " + errormsg );
})

Then('user validate {string}', async function (url) {
    console.log("step7 " + url );
})
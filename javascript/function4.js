// function dataFiller(elementname, dataToEnter){
//     setTimeout( () =>{
//         console.log ("Fill activity processed with"+ elementname + " =>"+dataToEnter);
//     }, 2000);
// }

// function click(elementname){
//     setTimeout( () => {
//         console.log ("Click activity processed with"+ elementname);
//     }, 1000);
// }

// dataFiller("username", "user1");
// click("login button");
// Output :- 
// Click activity processed withlogin button
// Fill activity processed withusername =>user1
// ==================================================================
// Alternate Way
// function dataFiller(elementname, dataToEnter, func1, func1param){
//     setTimeout( () =>{
//         console.log ("Fill activity processed with"+ elementname + " =>"+dataToEnter);
//         func1(func1param);
//     }, 2000);
// }

// function click(elementname){
//     setTimeout( () => {
//         console.log ("Click activity processed with"+ elementname);
//     }, 1000);
// }

// dataFiller("username", "user1", click, "login button");
// Output :- 
// Fill activity processed withusername =>user1
// Click activity processed withlogin button
// ===================================================================
// Promise
// let pr1 = new Promise((resolve,reject) =>{
//     // locator
//     let bool = true;
//     if(bool){
//         resolve("abc");
//     }
//     else{
//         reject("xyz");
//     }
// });

// pr1.then((msg) => {
//     console.log("then" + msg)
// }).catch((msg) => {
//     console.log("catch" + msg)
// })
// Output :-
// thenabc
//====================================================================
// Alternate way
// let pr1 = new Promise((resolve,reject) =>{
//     // locator
//     let bool = false;
//     if(bool){
//         resolve("abc");
//     }
//     else{
//         reject("xyz");
//     }
// });

// pr1.then((msg) => {
//     console.log("then" + msg)
// }).catch((msg) => {
//     console.log("catch" + msg)
// })
// Output :- 
// catchxyz
// ==================================================================
// function dataFiller(elementname, dataToEnter){
//     let p1 = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//            console.log ("Fill activity processed with"+ elementname + " =>"+dataToEnter); 
//         }, 2000);
//     });
//     return p1;
// }

// function click(elementname){
//     let p2 = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Click activity processed with" + elementname);
//         }, 1000);
//     });
//     return p2;
// }

// dataFiller("username", "data1").then((msg) => {
//     console.log ("then - ", msg);
//     return click("login button");
// }).then((msg) => {
//     console.log ("then - ", msg);
// }).catch((msg) => {
//     console.log ("catch - ", msg);
// })
// Output :- 
// Fill activity processed withusername =>data1
//==================================================================
// Alternate way
function dataFiller(elementname, dataToEnter){
    let p1 = new Promise((resolve, reject) => {
        setTimeout( () =>{
            reject("Fill activity processed with "+ elementname + " -> " + dataToEnter);
        }, 2000);
    });
    return p1;
}

function click(elementname){
    let p2 = new Promise((resolve, reject) => {
        setTimeout( () =>{
        resolve("click activity processed with "+ elementname);
    }, 1000);
    });
    return p2;
}


async function testcase(){
    try{
        await dataFiller("username", "data1");
        await click("login button");
    }catch(error){

    }
}
//===================================================================
// Practice Question
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside timeout");
// }, 2000);

// console.log("End");
// Output :- 
// Start
// End
// Inside timeout
//===================================================================
// test("Login Test", async ({ page }) => {

//     await page.goto("https://www.saucedemo.com/");

//     await page.locator("#user-name").fill("standard_user");

//     await page.locator("#password").fill("secret_sauce");

//     await page.locator("#login-button").click();

//     console.log("Login completed");
// });

// Output :- Because ReferenceError: test is not defined
//===================================================================
// async function testData() {

//     console.log("1");

//     setTimeout(() => {
//         console.log("2");
//     }, 1000);

//     console.log("3");

//     await Promise.resolve();

//     console.log("4");
// }

// testData();

// console.log("5");
// Output :- 
// 1
// 3
// 5
// 4
// 2

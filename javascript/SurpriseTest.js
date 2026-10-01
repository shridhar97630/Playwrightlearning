const PromptSync = require("prompt-sync");
let prompt = PromptSync();

function fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);

        let c = a + b;
        a = b;
        b = c;
    }
}

fibonacci(12);
//======================================================================
// Print Star
// for (let i = 1; i <= 7; i++) {
//     let stars = i <= 4 ? i : 8 - i;
//     console.log("*".repeat(stars));
// }
//======================================================================
//
// array

// let ram_marks = [70,80,85]
//                   0  1  2   --- index

// index

// console.log(ram_marks[0]);  --- Result display in line by line
// console.log(ram_marks[1]);
// console.log(ram_marks[2])

// console.log(ram_marks) --- Result display in one line

// console.table(ram_marks) --- Result display in Table format
// ===========================================================

// *** Alternate method for Array representation ***
// let ram_marks1 = {
//         "science" : 85,
//         "math"    : 70,
//         "arts"    : 80
// }

// console.log(ram_marks1) ------ Result display in one line

// console.log(ram_marks1["science"]) ---- Result display in line by line
// console.log(ram_marks1["arts"])
// console.log(ram_marks1["math"])

// console.table(ram_marks1) ---- Result display in Table format

// ===================================================================

// push :- Element added in end of the array
// Example :- 
// let ram_marks = [70,80,85]
// ram_marks.push(70)
// console.log(ram_marks)

// Output
// [ 70, 80, 85, 70 ] --- 70 is added in end of the arrey

// ===================================================================

// unshift :- Element added in start of the arrey
// Example :- 
// let ram_marks = [70,80,85]
// ram_marks.unshift(70)
// console.log(ram_marks)

// Output
// [ 70, 70, 80, 85 ] --- 70 is added in start of the arrey

// ===================================================================

// pop :- remove the data from end of the arrey
// Example :- 
// let ram_marks = [70,80,85]
// ram_marks.pop()
// console.log(ram_marks)

// Output
// [ 70, 80 ] ---- remove the last element from given arrey

// ===================================================================

// shift :- remove the data from start of the arrey
// Example :- 
//  let ram_marks = [70,80,85]
//  ram_marks.shift()
//  console.log(ram_marks)

// Output
// [ 80, 85 ] ---- remove the first element of the arrey

// ==================================================================

// Example for practice
 // let ram_marks = [70,80,95,100]

// ram_marks.push(100); --- //Output :- [ 70, 80, 95, 100 ]
// ram_marks.shift();----- // Output :- [ 80, 95 ]
// ram_marks.unshift(120);--- // Output :- [ 120, 70, 80, 95 ]
// ram_marks.pop();---- // Output :- [ 70, 80 ]
// ram_marks.push(200);----// Output :- [ 70, 80, 95, 200 ]
// ram_marks.splice(2,0,45);---- // Output :- [ 70, 80, 45, 95 ]
// ram_marks.splice(0,1,90)----- // Output :- [ 90, 80, 95 ]

// ram_marks.splice(0,3,200)

// console.log(ram_marks)

// =================================================================

// Another Example for Practice
// let shyam_marks = [70,80,95]

// // shyam_marks.push(100); --- // Output :- [ 70, 80, 95, 100 ]

// console.log(shyam_marks)

// ==================================================================
// let shyam_marks = [ 70, 80, 95, 100 ]

// shyam_marks.shift(); --- // Output :- [ 80, 95, 100 ]

// console.log(shyam_marks)

// ================================================================
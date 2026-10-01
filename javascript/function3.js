// High Order Function

// function PrintInStarFormat(text){
//     console.log ("***************")
//     console.log ("*",text,"*")
//     console.log ("***************")
// }

// function PrintInHashFormat(text){
//     console.log ("################")
//     console.log ("#",text,"#")
//     console.log ("################")
// }

// function PrintMyName(text,func){
//     func(text)
// }

// PrintMyName("Shridhar",PrintInStarFormat)
// PrintMyName("Sayali",PrintInHashFormat)
//================================================================
function PrintInDallorFormat(text)
{
    console.log ("$$$$$$$$$$$$$$$$$$$$$$")
    console.log ("$",text,"$")
    console.log ("$$$$$$$$$$$$$$$$$$$$$$")
}

function PrintInAndpercentFormat(text)
{
    console.log ("&&&&&&&&&&&&&&&&&&&&&&")
    console.log ("&",text,"&")
    console.log ("&&&&&&&&&&&&&&&&&&&&&&")
}
function PrintMyName(text,func)
{
     func(text)
}

PrintMyName("Shridhar",PrintInDallorFormat)
PrintMyName("Sayali",PrintInAndpercentFormat)
// code your solution here
// function saturdayFun(activity) {
//     if (activity = activity) {
//         return "This Saturday, I want to " + activity + "!"
//     } else {
//         return "This Saturday, I want to roller-skate!"
//     }
// }
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
// console.log(saturdayFun())

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(char){
    return function(character = "special"){
        return `You are ${char}${character}${char}!`
    }
}

console.log(wrapAdjective("*")("a dedicated programmer"));

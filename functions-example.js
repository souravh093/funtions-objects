// function functionName(parameters){
//     //function body
//     // return
// }

// var returnValue = functionName(parametersValue);

function getAverage (assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const returnValue = getAverage(58, 60, 60);
console.log(returnValue);
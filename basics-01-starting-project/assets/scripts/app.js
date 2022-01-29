const defaultNumber = 0;


let currentResult = defaultNumber;


function getenterednumber(){
    return parseInt(userInput.value);
}

function getoutputdescription(beforeinput, operator, afterinput){
    const description = `${beforeinput} ${operator} ${afterinput}`
    outputResult(currentResult, description);
}

function adding(){
    const enterednumber = getenterednumber();
    const initialresult = currentResult;
    currentResult = currentResult + enterednumber;
    getoutputdescription(initialresult, "+", enterednumber);
    
    
}

function subtract(){
    const enterednumber = getenterednumber();
    const initialresult = currentResult;
    currentResult = currentResult - enterednumber;
    getoutputdescription(initialresult, "-", enterednumber);
    
}
function multiply(){
    const enterednumber = getenterednumber();
    const initialresult = currentResult;
    currentResult = currentResult * enterednumber;
    
    getoutputdescription(initialresult, "*", enterednumber);
    
}

function divide(){
    const enterednumber = getenterednumber();
    const initialresult = currentResult;
    currentResult = currentResult / enterednumber;
    getoutputdescription(initialresult, "/", enterednumber);
    
    
}


addBtn.addEventListener('click', adding);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




let input = document.querySelector('#input')
const operators = ['+', '-', '*', '/', '=']
let operatorClicked = false
let clr = false
let operator
let operandFirst = ''
let operandSecond = ''

// operators.forEach( function(op) {
//     op.addEventListener('click', function() {
//         console.log('op |  clicked operator >>', op);
//         operatorClicked = true
//     })
// })
// let btns = document.querySelectorAll('button')
// let myValues = document.querySelectorAll('button').values

// console.log(myValues);

function myValue(e) {

    if (clr) {
        clearOutput()
    }
    
    if ( operators.includes(e)) {
        operatorClicked = true
    }

    if ( !operatorClicked && e != 'c'){
        copyToFirstOperand(e)
    }
    else {
        copyToSecondOperand(e)
    }

    console.log('myValue | clicked button value: e >> ', e)
    copyToOutput(e)
}

function copyToFirstOperand(f) {

    operandFirst += f

    console.log('copyToFirstOperand >> ', operandFirst);
}

function copyToSecondOperand(s) {

    if ( !operators.includes(s) && s != 'c') {
        operandSecond += s
    }
    console.log('copyToSecondOperand >> ', operandSecond);
}

function copyToOutput(x) {
    switch (x) {
        case 'c':
            input.value = ''
            break;

        case '+':
            operator = '+'
            input.value += x
            break

        case '-':
            operator = '-'
            input.value += x
            break

        case '*':
            operator = '*'
            input.value += x
            break

        case '/':
            operator = '/'
            input.value += x
            break

        case '=':
            calculate(input.value)
            clr = true
            break
        default:
            input.value += x
    }

    console.log('copyToOutput | value in output : x >> ', input.value)
}

function calculate(params) {
    let output
    console.log('calculate | first >> ', operandFirst);
    console.log('calculate | second >> ', operandSecond);
    console.log('calculate | operator >> ', operator);
    console.log('calculate | params >> ', params);
    switch (operator) {
        case '+':
            output = Number(operandFirst) + Number(operandSecond)
            break;
        case '-':
            output = Number(operandFirst) - Number(operandSecond)  
            break;
        case '*':
            output = Number(operandFirst) * Number(operandSecond)  
            break;
        case '/':
            output = Number(operandFirst) / Number(operandSecond)  
            break;
        default:
            break;
    }
    console.log('calculate | output >> ', output);
    input.value = output
}

function clearOutput() {
    clr = false
    operandFirst = ''
    operandSecond = ''
    input.value = ''
    operatorClicked = false
}
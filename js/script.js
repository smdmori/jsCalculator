let input = document.querySelector('#input')
let operators = document.querySelectorAll('.oprators button')
let operatorClicked = false
let operand
let inputFirst
let inputSecond

operators.forEach( function(op) {
    op.addEventListener('click', function() {
        console.log('op |  clicked operator >>', op);
        operatorClicked = true
    })
})
// let btns = document.querySelectorAll('button')
// let myValues = document.querySelectorAll('button').values

// console.log(myValues);

function myValue(e) {
    
    if ( !operatorClicked ) {
        copyToFirstOperand(e)
    }
    else {
        copyToSecondOperand(e)
    }

    console.log('myValue | clicked button value: e >> ', e)
    copyToOutput(e)
}

function copyToFirstOperand(f) {
    console.log('copyToFirstOperand >> ', f);
}

function copyToSecondOperand(s) {
    console.log('copyToSecondOperand >> ', s);
}

function copyToOutput(x) {
    switch (x) {
        case 'c':
            input.value = ''
            break;

        case '+':
            operand = '+'
            input.value += x
            break

        case '-':
            operand = '-'
            input.value += x
            break

        case 'X':
            operand = '*'
            input.value += x
            break

        case '/':
            operand = '/'
            input.value += x
            break

        case '=':
            calculate(input.value)
            break
        default:
            input.value += x
    }

    console.log('copyToOutput | value in output : x >> ', input.value)
    // calculate(input.value)

    // if (x == 'c' ) {
    //     input.value = ''
    // } else if ( x!= '=') {
    //     input.value += x
    // } else {
    //     console.log('copyToInput | input.value >> ', input.value);
    //     calculate(input.value)
    // }
}

function calculate(params) {
    console.log('calculate | params >> ', params);
    
}
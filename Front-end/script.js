const numberInput = document.querySelectorAll('#input button'),
    operands = document.querySelectorAll("#operands button")
const num1 = document.getElementById("num1"),
    num2 = document.getElementById("num2"),
    operand = document.getElementById("operand"),
    equals = document.getElementById("="),
    answerTag = document.getElementById("arithanswer"),
    equalsRepresentor = document.querySelector("#answer p")

numberInput.forEach(number => {
    const num1Updater = () => {
        number.classList.add("clicked")
        if(operand.innerHTML == '' || operand.innerText == ''){
            num1.innerText += number.innerText
        }
        setTimeout(() => {
            number.classList.remove("clicked")
        },250)
    }
    const num2Updater = () => {
        number.classList.add("clicked")
        if(!operand.innerHTML == ''){
            num2.innerText += number.innerText
        }
        setTimeout(() => {
            number.classList.remove("clicked")
        },250)
    }
    number.addEventListener("click",num1Updater)
    number.addEventListener("click",num2Updater)
})

operands.forEach(Operand => {
    const operandUpdater = () => {
        if(!num1.innerText == '' && Operand.id !== '=' && Operand.id !== 'switch' && Operand.id !== 'backspace'){
            operand.innerText = Operand.innerText
            console.log(Operand.id)
        }
        else if(Operand.id === "switch"){
            num1.innerText = '',num2.innerText = '',operand.innerText = '',answerTag.innerText = '',equalsRepresentor.innerText = ''
        }
        else if(Operand.id === "backspace"){
            if(operand.innerText === ''){
                num1.innerText = num1.innerText.substring(0,num1.innerText.length - 1)
            }
            else if(operand !== '' && num2.innerText.length !== 0){
                num2.innerText = num2.innerText.substring(0,num2.innerText.length - 1)
            }
            else if(operand !== '' && num2.innerText.length === 0){
                operand.innerText = ''
            }
        }
    }
    Operand.addEventListener("click",operandUpdater)
})

equals.onclick = () => {
    if(num1.innerText !== '' && num2.innerText !== '' && operand.innerText !== ''){
        let Num1 = Number(num1.innerText),Num2 = Number(num2.innerText)
        let result
        switch(operand.innerText){
            case '+':
                result = Num1 + Num2
                break;
            case '-':
                result = Num1 - Num2
                break;
            case '*':
                result = Num1 * Num2
                break;
            case '/':
                result = Num1 / Num2
                break;
            default:
                result = null
                break;
        }
        if(result && result !== null){
            result = Number(result.toPrecision(4))
            equalsRepresentor.innerText = "="
            answerTag.innerText = result
        }
    }
}
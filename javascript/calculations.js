import {varExport} from './nexus.js'

// ---------------------------------------------------- FUNCTIONS ------------------------------------------------------------------------

// ----------- NUMBERS ------------

function buttonZero(){
    return varExport.display.value += varExport.btnZero.value
}

function buttonOne(){
    return varExport.display.value += varExport.btnOne.value
}

function buttonTwo(){
    return varExport.display.value += varExport.btnTwo.value
}

function buttonThree(){
    return varExport.display.value += varExport.btnThree.value
}

function buttonFour(){
    return varExport.display.value += varExport.btnFour.value
}

function buttonFive(){
    return varExport.display.value += varExport.btnFive.value
}

function buttonSix(){
    return varExport.display.value += varExport.btnSix.value
}

function buttonSeven(){
    return varExport.display.value += varExport.btnSeven.value
}

function buttonEight(){
    return varExport.display.value += varExport.btnEight.value
}

function buttonNine(){
    return varExport.display.value += varExport.btnNine.value
}

// ----------- OPERATORS ------------

function buttonSum(){
    if(varExport.display.value) return varExport.display.value += varExport.btnSum.value
}

function buttonSubtraction(){
    if(varExport.display.value) return varExport.display.value += varExport.btnSubtraction.value
}

function buttonMultiplication(){
    if(varExport.display.value) return varExport.display.value += varExport.btnMultiplication.value
}

function buttonDivision(){
    if(varExport.display.value) return varExport.display.value += varExport.btnDivision.value
}

function buttonNegation(){
    return varExport.display.value += varExport.btnNegative.value
}

// ----------- FORMAT ------------

function buttonComma(){
    if(varExport.display.value) return varExport.display.value += varExport.btnComma.value
}

// ----------- RESET ------------

function buttonAC(){
    if(varExport.display.value) return varExport.display.value = ''
}

function buttonDelete(){
    let value = varExport.display.value
    let newString = value.slice(0, -1)

    if(varExport.display.value){
        return newString.length === 0 || varExport.display.value < 0 ? varExport.display.value = '' : varExport.display.value = parseInt(newString)
    }
}

// ----------- RESULT ------------

function buttonEqual(){
    let value = varExport.display.value

    if(varExport.display.value) return varExport.display.value = eval(value)
}

// ---------------------------------------------------- EXPORT ------------------------------------------------------------------------

const calcExport = {

    buttonZero,
    buttonOne,
    buttonTwo,
    buttonThree,
    buttonFour,
    buttonFive,
    buttonSix,
    buttonSeven,
    buttonEight,
    buttonNine,
    buttonSum,
    buttonSubtraction,
    buttonMultiplication,
    buttonDivision,
    buttonNegation,
    buttonComma,
    buttonAC,
    buttonDelete,
    buttonEqual

}

export {calcExport}
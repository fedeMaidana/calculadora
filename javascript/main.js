import {varExport} from './nexus.js'
import { calcExport } from './calculations.js'

// ---------------------------------------------------- EVENTS --------------------------------------------------------------------

// ----------- NUMBERS ------------

varExport.btnZero.addEventListener('click', calcExport.buttonZero)

varExport.btnOne.addEventListener('click', calcExport.buttonOne)

varExport.btnTwo.addEventListener('click', calcExport.buttonTwo)

varExport.btnThree.addEventListener('click', calcExport.buttonThree)

varExport.btnFour.addEventListener('click', calcExport.buttonFour)

varExport.btnFive.addEventListener('click', calcExport.buttonFive)

varExport.btnSix.addEventListener('click', calcExport.buttonSix)

varExport.btnSeven.addEventListener('click', calcExport.buttonSeven)

varExport.btnEight.addEventListener('click', calcExport.buttonEight)

varExport.btnNine.addEventListener('click', calcExport.buttonNine)

// ----------- OPERATORS ------------

varExport.btnSum.addEventListener('click', calcExport.buttonSum)

varExport.btnSubtraction.addEventListener('click', calcExport.buttonSubtraction)

varExport.btnMultiplication.addEventListener('click', calcExport.buttonMultiplication)

varExport.btnDivision.addEventListener('click', calcExport.buttonDivision)

varExport.btnNegative.addEventListener('click', calcExport.buttonNegation)

// ----------- FORMAT ------------

varExport.btnComma.addEventListener('click', calcExport.buttonComma)

// ----------- RESET ------------

varExport.btnAc.addEventListener('click', calcExport.buttonAC)

varExport.btnDelete.addEventListener('click', calcExport.buttonDelete)

// ----------- RESULT ------------

varExport.btnEqual.addEventListener('click', calcExport.buttonEqual)

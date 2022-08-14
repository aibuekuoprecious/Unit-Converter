let button = document.getElementById("button")
let digit = document.getElementById("digit")
let lResult = document.getElementById("lResult")
let vResult = document.getElementById("vResult")
let mResult = document.getElementById("mResult")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

button.addEventListener("click", convert);
function convert() {
    let digitValue = digit.value
    const mToFt = digitValue * meterToFeet
    const ftToM = digitValue / meterToFeet
    const lToGal = digitValue * literToGallon
    const galToL = digitValue / literToGallon
    const kgToLb = digitValue * kiloToPound
    const lbToKg = digitValue / kiloToPound

    lResult.textContent = `${digitValue} m= ${mToFt.toFixed(3)} ft |
                            ${digitValue} ft= ${ftToM.toFixed(3)} m`
    vResult.textContent = `${digitValue} l= ${lToGal.toFixed(3)} gal |
                            ${digitValue} gal= ${galToL.toFixed(3)} l`
    mResult.textContent = `${digitValue} kg= ${kgToLb.toFixed(3)} lb |
                            ${digitValue} lb= ${lbToKg.toFixed(3)} kg`
}


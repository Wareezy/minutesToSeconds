
//declaring all the variables 
let display=document.querySelector('[data-display]')
let secondsToMinute=60
let btnMulti=document.querySelector('[data-calc]')

//function that will be performing the calculation
function convert(){
    let input= document.querySelector('[data-input]').value
    //backticks are used to access the variables and to display the data more neatly
    let answer=eval(`${input} * ${secondsToMinute}`)
    answer=answer.toFixed(2);
    display.innerHTML=answer
}
//calling a click function. so that when the button is clicked that it accesses the convert function
btnMulti.addEventListener('click',convert)


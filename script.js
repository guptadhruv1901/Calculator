let outputScreen = document.querySelector('#outputScreen')

function display(num){
    outputScreen.value += num
}
function calculate(){
    try {
        if (outputScreen.value === '' ) {
            outputScreen.value = 0
        }
        outputScreen.value = eval(outputScreen.value)
    } catch (err) {
        alert("Invalid")
    }
}
function allClear(){
    outputScreen.value = ''
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}
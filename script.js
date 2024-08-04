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

function changeTheme() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        document.querySelector('#icon').src = 'dark theme icon/sun-regular-24(1).png';
    }else{
        document.querySelector('#icon').src = 'dark theme icon/moon.png';
    }
}
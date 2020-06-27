function getInput(num){
    console.log(num)
    var input = document.getElementById("input");
    input.value += num; 
}
function clearText(){
    var input = document.getElementById("input");
    input.value = ""; 

}
function getResult(){
    var input = document.getElementById("input");
    input.value = eval(input.value)
}

function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}

function equal(){
    var exponent = document.form.textview.value
    if(exponent){
        document.form.textview.value = eval(exponent)
    }
} 

function clean(){
    document.form.textview.value ="";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
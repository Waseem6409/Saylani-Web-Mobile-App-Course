function clean(){
     document.form.textview.value=""
}
function button(num){
    document.form.textview.value+=num
}
function buttons(num){
    var check=document.form.textview.value
    if(check.slice(-1)!=="-" & check.slice(-1)!=="+" & check.slice(-1)!=="*" & check.slice(-1)!=="/" & check!=="" & check.slice(-1)!=="%" & check.slice(-1)!=="."){
        document.form.textview.value+=num
    }
    else{
        document.form.textview.value=check.slice(0,-1)
        document.form.textview.value+=num
    }
}
function back(){
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1)
}
function equal(){
    var check= document.form.textview.value
    if(check){
        if(check.slice(-1)!=="-" & check.slice(-1)!=="+" & check.slice(-1)!=="*" & check.slice(-1)!=="/" & check!=="" & check.slice(-1)!=="." ){
            document.form.textview.value=eval(check)
        }
        else{
            document.form.textview.value=eval(check.slice(0,-1))
        }
    }
}
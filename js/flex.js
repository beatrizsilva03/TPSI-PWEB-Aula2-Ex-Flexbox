function flex(valor){
    document.getElementById('container').style.flexDirection=valor;
}
function wrap(valor){
    document.getElementById('container').style.flexWrap=valor;
}
function justify(valor){
    document.getElementById('container').style.justifyContent=valor;
}
function align(valor){
    document.getElementById('container').style.alignItems=valor;
}
function slide(){
    document.getElementById('publicidade').src="../img/email.jpg";
    document.getElementById('descricao').innerHTML="email";
    setTimeout("slide2()",2000)
}
function slide2(){
    document.getElementById('publicidade').src="../img/imc.jpg";
    document.getElementById('descricao').innerHTML="imc";
    setTimeout("slide3()",2000)
}
function slide3(){
    document.getElementById('publicidade').src="../img/logo.jpg";
    document.getElementById('descricao').innerHTML="isla";
    setTimeout("slide()",2000)
}
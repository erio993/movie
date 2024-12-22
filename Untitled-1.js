let inp = document.getElementById('inp');
inp.onfocus= function(){
    inp.style.border='3px solid red'
}
inp.onblur= function(){
    inp.style.border='none'
}

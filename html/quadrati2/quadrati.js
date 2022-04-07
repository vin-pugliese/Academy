document.addEventListener('DOMContentLoaded',function() {

    let a=Math.floor(Math.random() *100);
    let b=Math.floor(Math.random() *100);
    let c=Math.floor(Math.random() *100);
    let d=Math.floor(Math.random() *100);

    let a1 =  document.getElementById("d1");
    a1.innerHTML += "<p>" + a +"</p>";

    let a2 =  document.getElementById("d2");
    a2.innerHTML += "<p>" + b +"</p>";

    let a3 =  document.getElementById("d3");
    a3.innerHTML += "<p>" + c +"</p>";

    let a4 =  document.getElementById("d4");
    a4.innerHTML += "<p>" + d +"</p>";

    

})

function Operate(a,b,c,d){

    let choice=prompt("Scegli operazione: 1. somma 2.sottrai 3.moltiplica");
    let res = document.getElementById("res");

    switch(parseInt(choice)){
        case 1: 
            let sum = a+b+c+d
            res.innerHTML += "<p>" + sum +"</p>";
            break;
        case 2:
            let diff = a+b+c+d;
            res.innerHTML += "<p>" + diff +"</p>";
            break;
        case 3: 
            let mol = a+b+c+d;
            res.innerHTML += "<p>" + mol +"</p>";
            break;

    }
}


/*
setTimeout(() => {
    // TODO
}, 5000)

*/
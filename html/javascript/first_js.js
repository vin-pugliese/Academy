

function binToDec(m){
document.write("<br>")
document.write(parseInt(m, 2))
document.write("<br>")
}

function test3(){
    let input=prompt("In che anno siamo? ", 2020);
    if(input!=2022) document.write("Sbagliato!"); 
    else document.write("Esatt0!");
}

function test4(){

    let anni=prompt("quanti anni hai?");
    return anni >= 18 ? document.write("maggiorenne") : document.write("minorenne");
}


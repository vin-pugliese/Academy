function main(){

let arr1 = [];
let arr2 = [];
let arr3 = [];
let x;

    //popolo l'array
    for (let i = 0; i <10; i++) {
        x = Math.floor(Math.random() * 10);
        arr1.push(x);
    }

    for (let i = 0; i <10; i++) {
        x = Math.floor(Math.random() * 10);
        arr2.push(x);
    }

    //stampo l'array1
    document.write("array 1 <br>");
    for (let i = 0; i < 10; i++) {
        document.write(arr1[i]);
        document.write("<br>");
    }

    //stampo l'array2
    document.write("array 2 <br>");
    for (let i = 0; i < 10; i++) {
        document.write(arr2[i]);
        document.write("<br>");
    }

    let choice = prompt("quale operazione eseguire? 1.add. 2.sub 3.divide 4.multipl");

    switch (parseInt(choice)){
        case 1: arr3 = add(arr1, arr2);
                break;
        case 2: arr3 = sub(arr1, arr2);
                break;
        case 3: arr3 = divide(arr1, arr2);
                break;
        case 4: arr3 = multiply(arr1, arr2);
                break;
        
        default: document.write("operazione non consentita <br>");
    }

    document.write("array3 <br>")
    for (let i = 0; i < 10; i++) {
        document.write(arr3[i]);
        document.write("<br>");
    }
    


}

function add(array1, array2){

    let arr = [];

    for(let i=0; i<10; i++){
        arr.push(array1[i] + array2[i]);
    }

    return arr;

}

function sub(array1, array2){

    let arr = [];

    for(let i=0; i<10; i++){
        arr.push(array1[i] - array2[i]);
    }

    return arr;

}

function divide(array1, array2){

    let arr = [];

    for(let i=0; i<10; i++){
        arr.push(array1[i] / array2[i]);
    }

    return arr;

}

function multiply(array1, array2){

    let arr = [];

    for(let i=0; i<10; i++){
        arr.push(array1[i] * array2[i]);
    }

    return arr;

}

/*
switch (parseInt(choice)) {
        case 1:
            for (let i = 0; i < 10; i++) {
                arr3.push(arr1[i] + arr2[i]);
            }
            break;
        case 2:
            for (let i = 0; i < 10; i++) {
                arr3.push(arr1[i] - arr2[i]);
            }
            break;
        case 3:
            for (let i = 0; i < 10; i++) {
                arr3.push(arr1[i] / arr2[i]);
            }
            break;
        case 4:
            for (let i = 0; i < 10; i++) {
                arr3.push(arr1[i] * arr2[i]);
            }
            break;

            default: document.write("operazione non consentita <br>");
    }











*/
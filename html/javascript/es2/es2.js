function arr() {
    let num = prompt("inserisci dimensione");

    let arr = [];
    let x;

    //popolo l'array
    for (let i = 0; i < num; i++) {
        x = Math.floor(Math.random() * 90);
        arr.push(x);
    }

    //stampo l'array
    for (let i = 0; i < num; i++) {
        document.write(arr[i]);
        document.write("<br>");
    }

    //inverto l'array
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    //stampo l'array
    document.write("<br>invertito <br><br>");
    for (let i = 0; i < num; i++) {
        document.write(arr[i]);
        document.write("<br>");
    }

    //ordinamento con bubble sort
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    //stampo l'array
    document.write("<br>ordinato <br><br>");
    for (let i = 0; i < num; i++) {
        document.write(arr[i]);
        document.write("<br>");
    }

}
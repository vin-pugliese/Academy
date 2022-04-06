function tombola(){
   
    let tabellone = [];
    let cartella = [];

    let i, j, x;
    let count =0;

    for(i=0; i<10; i++){
        x = Math.floor(Math.random()*90);
        tabellone.push(x);
       
    }

    for(i=0; i<10; i++){
        x = Math.floor(Math.random()*90);
        cartella.push(x);
    }



    for(i=0; i<tabellone.length; i++){
        for(j=0; j<cartella.length; j++){
            if(tabellone[i] == cartella[j]){
                count = count +1;
            }
        }
    }



    switch (count){
        case 2: document.write("ambo");
                break;
        case 3: document.write("terno");
                break;

        case 4: document.write("quaterna");
                break;

        case 5: document.write("cinquina");
                break;

        case 10: document.write("tombola");
                break;
        default: document.write("sballato");
    }



    


}
document.addEventListener('DOMContentLoaded', function(){
    let div= document.getElementById('div').classList.add('classAdded');

    let p = document.getElementsByClassName('classP')[0].classList.add('classAdded');


    let p1 = document.getElementsByTagName('p');
    for(let i=0; i<p1.length; i++)
        p1[i].classList.add('allP');


    //query selector seleziona in base ad una classe     
    let button = document.querySelector('.btn').innerHTML = 'Call method'


})
 const cookie = () =>{
    
    let name = prompt("Inserisci nome ", "Nome");
    document.cookie = `nomeUtente = ${name};`;
}

cookie();

const localStorage = () => {
    window.localStorage.setItem("Username", 'Vinc');
    alert(localStorage.getItem("username"));
}

localStorage();

const ajax = () => {
    const call = new XMLHttpRequest();
    call.open("GET", 'https://jsonplaceholder.typicode.com/posts', true);
    call.onreadystatechange = () => {

    
        if (call.readyState === XMLHttpRequest.DONE) {
            var status = call.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                let obj = eval(call.responseText);
                let res = document.getElementById("res");
                obj.forEach(element => {
                    res.innerHTML += "<p><b>userID: </b>" + element.userId + "</p>";
                    res.innerHTML += "<p><b>id: </b>" + element.id + "</p>";
                    res.innerHTML += "<p><b>title: </b>" + element.title + "</p>";
                    res.innerHTML += "<p><b>body: </b>" + element.body + "</p>";
                });
            }
        }
        else {
            console.log("error");
        }
    }
    call.send(null);
}

const ajaxFetch = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(()=> "Alert error")


}
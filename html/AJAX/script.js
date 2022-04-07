document.addEventListener('DOMContentLoaded', function(){

    const call = new XMLHttpRequest()
    call.open("GET", 'https://jsonplaceholder.typicode.com/posts', true)



})





const ajax = (call) => {

    call.onreadystatechange = () => {

        console.log(call.readyState);
        console.log(call.status);
        if (call.readystate == 4 && call.status == 200){
            //document.getElementById("res").innerHTML += call.responseText.replaceAll(",", "<br>");
            let obj = eval(call.responseText);
            let res = document.getElementById("res");
            obj.forEach(element => {
                console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                console.log(element.userId);
                res.innerHTML += "<p><b>userID: </b>" + element.userId +"</p>";
                res.innerHTML += "<p><b>id: </b>" + id +"</p>";
                res.innerHTML += "<p><b>title: </b>" + element.title +"</p>";
                res.innerHTML += "<p><b>body: </b>" + element.body +"</p>";
            });
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
function show(position){

    document.getElementById('alt').innerHTML = 'Latitude ' + position.coords.latitude;
    document.getElementById('lon').innerHTML = 'Longitude ' + position.coords.longitude;
    
}

if(navigator.geolocation){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(show, null,{
            enableHighAccuracy: true,
            maximumAge: 60000,
            timeout: 1000
        })
    }
}
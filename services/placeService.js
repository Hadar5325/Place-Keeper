// // AIzaSyBXxsMmenEz52BT8QdSUmPs4aSiIHGqNN4
// function getPosition(){
//     if(!navigator.geolocation){
//         alert('hi')
//         return
//     }

//     navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
// }

// function showLocation(position){
//     console.log(position)
//     const {latitude: lat, longtitude: lng} = position.coords
//     initMap(lat,lng)
// }

// function initMap(lat = 40, lng = 40){

//     var elMap = document.querySelector('.map')
//     var options = {
//         center: {lat, lng},
//         zoom: 14
//     }
//     var map = new google.maps.Map(
//         elMap, 
//         options
//     )
//     var marker = new google.maps.Marker({
//         position: {lat, lng},
//         map,
//         title: 'hi there!'
//     })
// }


// function handleLocationError(error) {
//     var locationError = document.getElementById("locationError")

//     switch (error.code) {
//         case 0:
//             locationError.innerHTML = "There was an error while retrieving your location: " + error.message
//             break
//         case 1:
//             locationError.innerHTML = "The user didn't allow this page to retrieve a location."
//             break
//         case 2:
//             locationError.innerHTML = "The browser was unable to determine your location: " + error.message
//             // break
//         case 3:
//             locationError.innerHTML = "The browser timed out before retrieving the location."
//             break
//     }
// }









//////////////////////////




function getPosition() {

    if (!navigator.geolocation) {
        alert('HTML5 Geolocation is not supported in your browser')
        return
    }

    // One shot position retrieval...
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
    
    // ...or continous watch
    // navigator.geolocation.watchPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    
    console.log(position)
    const {latitude: lat, longitude: lng, accuracy} = position.coords

    // document.getElementById("latitude").innerHTML = lat
    // document.getElementById("longitude").innerHTML = lng
    // document.getElementById("accuracy").innerHTML = accuracy

    var date = new Date(position.timestamp)
    // document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    
    initMap(lat, lng)
}

function initMap(lat = 31, lng = 31) {

    var elMap = document.querySelector('.map')
    var options = {
        center: { lat, lng },
        zoom: 14
    }

    var map = new google.maps.Map(
        elMap,
        options
    )

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World!'
    })
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError")

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message
            break
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location."
            break
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message
            break
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location."
            break
    }
}

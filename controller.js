'use strict'

function submitFile(event){
    event.preventDefault();
    
    var elName = document.querySelector('.first-name').value;
    var elBackgrColor = document.querySelector('.background-color').value;
    var elTxtColor = document.querySelector('.text-color').value;
    var elZoomFactor = document.querySelector('.zoom-factor').value;
    var elMapLocation = document.querySelector('.map-start-location').value;

    var objLoc = splitLocMap(elMapLocation)    
    var prefUserObj = createObjUserPref(elName, elBackgrColor,elTxtColor,elZoomFactor,objLoc)
    sendDataToStorage(prefUserObj)

}


function onInputSlider(){
    var elZoomFactor = document.getElementById('zoom-factor').value;
    var elSpanValZoom = document.querySelector('.val-zoom-factor')
    elSpanValZoom.innerHTML = elZoomFactor
}

function splitLocMap(elMapLocation){
    console.log('hi')
    const [lat,lng] = elMapLocation.split(',')
    console.log(lat, lng)
    return {lat,lng}
}
function createObjUserPref(userName, backgroundColor,textColor,zoomFactor,objLoc){
    return {
        userName,
        backgroundColor,
        textColor,
        zoomFactor,
        lat: objLoc.lat,
        lng: objLoc.lng
    }
}
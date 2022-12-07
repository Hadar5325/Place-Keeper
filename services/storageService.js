'use strict'
const KEY = 'user-setting'


function sendDataToStorage(objUser){
    console.log(objUser)
    var strObj = JSON.stringify(objUser)
    localStorage.setItem(KEY, strObj)
    console.log(localStorage )
getDataFromLocalStorage()
}

function getDataFromLocalStorage(){
    var obj = localStorage.getItem(KEY)
    return JSON.parse(obj)
}
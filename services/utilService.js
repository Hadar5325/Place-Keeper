'use strict'

function onInit(){
    // const userName = greetUser()
    const userName = 'hi'

    const elUserName = document.querySelector('.user-name')
    elUserName.innerText = `Hello ${userName}`
}
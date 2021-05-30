

let form =document.querySelector('form')
let button = document.getElementById('button')
let user =document.getElementsByClassName("input")
let output = document.getElementsByClassName('output') 


form.addEventListener('submit',(e) =>{

    e.preventDefault()

    let result = ""
    let characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjkzxcvbnm1234567890'
    let charactersLength = characters.length

    for(let  i = 0 ; i < user.value; i++){
        result+=characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    output.innerHTML=result
})

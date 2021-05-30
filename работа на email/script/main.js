
 

let obj = {
    login:'some@gmail.com',
    pass:'qwerty123'
}

let email = document.getElementById('gmail')
let password = document.getElementById('password')

const go =(e)=>{
    let mail = email.value
    let pass = password.value
    let p = document.getElementById("text")
    let output = document.getElementsByClassName('output')

    if(mail == obj.login && pass == obj.pass){
        location.href="https://www.youtube.com/"
    }else if(mail == obj.login  && pass !== obj.pass){
        p.innerHTML='пароль не совпадает'
    }else{  
        p.innerHTML='Логин или пароль неверный'
    }
        e.preventDefault()

}
 
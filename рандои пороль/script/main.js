let user =prompt('')
 
function go(lenght){

    let result = ""
    let characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjkzxcvbnm1234567890'
    let charactersLength =characters.length

    for(let  i = 0 ; i < user; i++){
        result+=characters.charAt(Math.floor(Math.random()*charactersLength))
    }
     return result
}
console.log(go())
alert(go())
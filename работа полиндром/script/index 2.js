
// let users = prompt('введите полиндром ')

// function polindrome () {
//     let right = users.reverse()

//         if(users == right) alert("это слово полиндром")
//         else alert('no')
// }




// let some = prompt('ВВЕДИТЕ СЛОВО')

// let reverseSome = some.split('').reverse().join('')
// console.log(reverseSome)

// some == reverseSome ? alert('полиндром') : alert('OOps')

let output = document.getElementById('output')

let input = document.getElementById('input')
    const go =() => {

    let val = input.value
    let  revVal = val.split('').reverse().join('')
    console.log(reverseVal)

    if(val == revVal){
       output.innerHTML='Слово'+ val +'- Полиндром'
    }else{
        output.innerHTML='Слово'+ val +'- Не Полиндром'
    }
    
}
    



    
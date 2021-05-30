//  var a = prompt('number')
//  var b = 0

//  for (num = b ; num <= a; num++){
//      console.log(num)
//  }


//  var a = 100
//  var b = 0

//  for (num = b ; num <= a; num++){

//     if(num % 3 == 0 && num % 5 == 0)  console.log ("fizzBuzz")
//     else if (num % 3 == 0)  console.log("Fizz")
//     else if(num % 5 == 0)  console.log("buzz")
//     else console.log(num)
// }

// var arr = ['Apple', 'pen', 5 , 125, 4.85 ,]
// console.log(arr.length) // длина массива
// console.log(arr[1]) //ввод по индексу
// console.log(arr)

// arr.pop() // удаление с конца
// console.log(arr)

// arr.push( ) //добавление в конец
// console.log(arr)

// arr.shift() //удаление с начало
// console.log(arr)

// arr.unshift() //добавление с начало
// console.log(arr)

// arr.reverse() //перевернуть 
// console.log(arr)

// // for (var i = 0 ; i < arr.length ; i++){ 
// //     alert(arr[i])
// // }

// for(i in arr)  console.log(arr[i])

// for( var elem of arr)  alert(elem)

// var arr = ['a','b','c','d','j','g','h','r']
// var len = arr.length-1
// for (var i = 0; i<3; i++) {
//      var int = + prompt('Введите число от 0 до ' +len )
//      if(int< arr.length) alert(arr[int])
//      else alert('ieje')
// }



// задача
// 1) 3 Вопроса 
// 2) ответа
// 3) Правильный ответ


// var que = alert('Единицы измерение силы тока?','Самая длинная река в мире ', 'Сколько океанов на нашей планете', )
// var ant = ['Ампер', 'Вольт', 'Ватт': 'Нил','Амазонка','Нарын': '7', '8', '5',]
// var opt = prompt('1)Ампер , 2)Вольт ,3)Ватт ' , '1)Нил, 2)Амазонка, 3)Нарын' , '1) 7,2) 8, 3) 5',)
//  for(var i = 0; i<3; i++){
//      if(options1 === '1'){
//          alert('yes')
//      }else{ 
//          alert('no')
//      }
//  }



var question = ['Единицы измерение силы тока?','Самая длинная река в мире ? ', 'Сколько океанов на нашей планете ', ]  
var answer = ["1)Ампер  2)Вольт  3)Ватт", "1)Нил  2)Нарын  3)Амазонка", "1)7   2)5  3)4"]
var riht = ["1", "3", "2"]
for(i=0; i<=2; i++){
    alert(question[i])
    var int= +prompt("Выберите ответ:   "+answer[i])
    if(int==riht[i]) alert("Правильно, вы молодец :)")
    else alert ("Неправильно , попробуйте еше раз:(")   
}

 

 



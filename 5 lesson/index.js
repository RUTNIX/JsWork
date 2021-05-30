// var question = ['Единицы измерение силы тока?','Самая длинная река в мире ? ', 'Сколько океанов на нашей планете ', ]  
// var answer = ["1)Ампер  2)Вольт  3)Ватт", "1)Нил  2)Нарын  3)Амазонка", "1)7   2)5  3)4"]
// var riht = ["1", "3", "2"]
// for(i=0; i<=2; i++){
//     alert(question[i])
//     var int= +prompt("Выберите ответ:   "+answer[i])
//     if(int==riht[i]) alert("Правильно, вы молодец :)")
//     else alert ("Неправильно , попробуйте еше раз:(")   
// }



// var user = +prompt('вибери не сгораемую сумму 100 200 ')
// var question = ['Единицы измерение силы тока?','Самая длинная река в мире ? ' ]  
// var answer = ["1)Ампер  2)Вольт  3)Ватт", "1)Нил  2)Нарын  3)Амазонка"]
// var opt = ["1", "3"]
// var caunt
// for(i=0; i<=2; i++){
//     alert(question[i])
//     var int= +prompt("Выберите ответ:   "+answer[i])
//     if(int==opt[i]) alert("Правильно, вы молодец :)")
//     else alert ("Неправильно , попробуйте еше раз:(")   
// }

// var user = +prompt('вибери не сгораемую сумму 100 200 ')
// var questions = ['Единицы измерение силы тока?','Самая длинная река в мире ? ' ] 
// var options = ["1)Ампер  2)Вольт  3)Ватт", "1)Нил  2)Нарын  3)Амазонка"]
// var answers = ["1", "3"]
// var cont = 0

// for( var i = 0; i<questions.length; i++){
//     var otvet = prompt(questions[i] +'\n'+ options[i])
//     if(otvet=== answers[i] ){
//         count +=100
//         alert('правильно')
//         continue
//     }else{
//         alert('calam aleikum')
//         if(user<=count){
//             count=user
//         }else{

//         }
//     }
// }



// var user = {
//     name:'rava',
//     age: 18,
//     LastName:'0.',
//     smoke:'folse',
//     weight: 82.2
// }

//console.log(user) //ввод всего обьекта

// console.log( 'user name' +user.name)
// console.log( 'last name' +user.LastName)
// console.log('user age = ' +user.age +'& weight =' +user.weight)

//user.married = true //добавление обьекта
// console.log(user)

//delete user.smoke // удаление обьекта
//console.log(user)

//user.age = 58 //изменение обьекта
// console.log(user)

// user['jop position'] ='fronted developer'
// console.log(user)
// console.log(user['jop position'])



var about = {
    name:'rava',
    age: 18,
    LastName:'0.',
    smoke:'folse',
    weight: 82.2
}

    for(key in about){
        var user = prompt()
        if(user == key){
            alert(about[user])
            break
        }
    }



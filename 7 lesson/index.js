        // const name = ['ejfe',' dsjhui']
        // console.log(name)
        // name.unshift('wjhdf')
        // console.log(name)


        // var some = true
        // if (some) alert('hello')
        // else alert('oops!')


        // let some = 5
        // !some ? alert('hello') :
        // some == 5 ? alert('five'):
        // alert('ooops!')

        
        // let name = 5
        // switch (name){
        //     case 1:
        //         alert('min')
        //         break
        //     case 5:
        //         alert('norm')
        //         break

        //     case 10:
        //     case 15:
        //         alert('hight')
        //         break
            
        //     default:
        //         alert('MF')
        //         break
        // }


        // let users =[
        //     {
        //         id:1,
        //         name:'Adam',
        //         role:'mentor',            
        //     },
        //     {
        //         id:2,
        //         name:'Azamat',
        //         role:'student',
        //     },
        //     {
        //         id:3,
        //         name:'Kanysh',
        //         role:'student',
        //     },
        //     {
        //         id:4,
        //         name:'Ravshan',
        //         role:'student',
        //     },
        // ]

        // for(let i = 0 ; i<users.length;i++){
        //     console.log(users[i].name)
        // }
        // users.forEach(el=>{
        //     el.role == 'student' && console.log(el.name)
        // })

        // users.map((el, index, arr)=>{
        //     console.log(el)
        //     console.log(index)
        //     console.log(arr)
        // })
        // let name = users.map((el, index, arr)=>{
        //     return el.name
        // })
        // alert+(name)
    
        
let users = [
    {
        quest:'Единицы измерение силы тока?' ,
        ans:"1)Ампер  2)Вольт  3)Ватт",
        rht:'1'
    },
    {
        quest:'Самая длинная река в мире ? ',
        ans:"1)Нил  2)Нарын  3)Амазонка",
        rht:"3"
    },
    {
        quest:'Сколько океанов на нашей планете ',
        ans:"1)7   2)5  3)4",
        rht:"2"
    },
]

// users.forEach(el=>{
//     let atr = prompt(el.quest + '\n' + el.ans + '\n' + 'выберите ответ')
//     atr === el.rht ? alert('ok') : alert('no')
// });

users.forEach(el=>{
    let users_ans = prompt(`Ответ на вопрос: \n ${el.quest} \n Варианты ${el.ans}`)
});
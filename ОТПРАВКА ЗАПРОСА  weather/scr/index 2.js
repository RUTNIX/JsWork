let api = '&appid=b7805ebe9de664e25e3ce55792b16760'
let site='http://api.openweathermap.org/data/2.5/weather?q='

let output = document.getElementById('output')
const go = (e)=>{
    e.preventDefault()
    let input = document.getElementById('input')
    let url= site + input.value + api
    getWeather(url)
    input.value=''
}
const getWeather = async(url)=>{
    let req  = await fetch(url)
    let res = await req.json()
    console.log(res)
    renderWeather(res)
}

const renderWeather = (obj)=>{

    output.innerHTML=''

    let sity = document.createElement('p')
    sity.innerHTML=obj.name
    
    let temp = document.createElement('p')
    temp.innerHTML=(obj.main.temp - 275.15).toFixed(1) +' C'
    
    let speed = document.createElement('p')
    speed.innerHTML='Скорость ветра '+obj.wind.speed + ' км/час'

    output.appendChild(sity)
    output.appendChild(temp)
    output.appendChild(speed)
    
    console.log(sity)
    console.log(temp)
}       








// const renderWeather =(arr)=>{
//     output.innerHTML=''
//         arr.forEach =(el) => {
//             output.innerHTML=''
//             let sity = document.createElement('p')
//             sity.innerHTML=el.name

//             let temp = document.createElement('p')
//             temp.innerHTML=el.main.temp

//             output.appendChilda(sity)
//             output.appendChild(temp)

//             console.log(sity)
//             console.log(temp)


//          };
//     }
